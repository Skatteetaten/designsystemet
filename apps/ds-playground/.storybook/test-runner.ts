import { expect } from '@storybook/jest';
import { StoryContext } from '@storybook/react';
import {
  getStoryContext,
  TestContext,
  TestRunnerConfig,
} from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import { Page } from 'Playwright';

import { screenShotOptions } from '../src/stories/__tests__/testUtils/puppeteer.testing.utils';

const customConfig = {
  allowSizeMismatch: true,
  comparisonMethod: 'ssim',
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: true,
  failureThreshold: 0.00001,
  failureThresholdType: 'percent',
  customDiffConfig: {
    ssim: 'fast',
  },
};

async function adjustViewport(page, viewport): Promise<void> {
  if (viewport?.defaultViewport || viewport.viewPortHeight) {
    const widthPx = viewport.viewports[viewport.defaultViewport]?.styles?.width;
    await page.setViewportSize({
      width: widthPx ? parseInt(widthPx) : 800,
      height: viewport?.viewPortHeight ?? 600,
    });
  } else {
    await page.setViewportSize({
      width: 800,
      height: 600,
    });
  }
}
async function verifyImageSnapshots(
  page: Page,
  storyContext: StoryContext,
  context: TestContext
): Promise<void> {
  if (storyContext.parameters.imageSnapshot?.disable) {
    return;
  }
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot({
    customSnapshotIdentifier: `${context.id}-snap`,
  });
  const hover = storyContext.parameters.imageSnapshot?.hover;
  if (hover) {
    await page.hover(hover);
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot({
      customSnapshotIdentifier: `${context.id}-hovered-snap`,
    });
    await page.mouse.move(0, 0);
    await page.mouse.click(0, 0);
  }

  const focus = storyContext.parameters.imageSnapshot?.focus;
  if (focus) {
    await page.focus(focus);
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot({
      customSnapshotIdentifier: `${context.id}-focused-snap`,
    });
    await page.$eval(`${focus}`, (el: HTMLElement) => el.blur());
  }

  const click = storyContext.parameters.imageSnapshot?.click;
  if (click) {
    await page.click(click);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot({
      customSnapshotIdentifier: `${context.id}-clicked-snap`,
    });
    await page.$eval(`${click}`, (el: HTMLElement) => el.blur());
    await page.mouse.move(0, 0);
    await page.mouse.click(0, 0);
  }

  const scroll = storyContext.parameters.imageSnapshot?.scroll;
  if (scroll) {
    await page.evaluate((scroll) => {
      window.scrollBy(scroll.xPixels ?? 0, scroll.yPixels ?? 0);
    }, scroll);
    const imageScrolled = await page.screenshot(screenShotOptions);
    expect(imageScrolled).toMatchImageSnapshot({
      customSnapshotIdentifier: `${context.id}-scrolled-snap`,
    });
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }
}

async function verifyHTMLSnapshots(page: Page): Promise<void> {
  const elementHandler = await page.$('#root');
  const innerHTML = await elementHandler.innerHTML();
  expect(innerHTML).toMatchSnapshot();
}

async function verifyAxeRules(
  page: Page,
  storyContext: StoryContext
): Promise<void> {
  if (storyContext.parameters?.a11y?.disable) {
    return;
  }
  await configureAxe(page, {
    rules: storyContext.parameters?.a11y?.config?.rules,
  });

  await checkA11y(page, '#root', {
    detailedReport: true,
    verbose: false,
    detailedReportOptions: {
      html: true,
    },
  });
}

const config: TestRunnerConfig = {
  setup(): void {
    const toMatchImageSnapshot = configureToMatchImageSnapshot({
      ...customConfig,
    });
    expect.extend({ toMatchImageSnapshot });
  },

  async preRender(page, context) {
    await injectAxe(page);
    const storyContext = await getStoryContext(page, context);
    await adjustViewport(page, storyContext.parameters.viewport);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
  },

  async postRender(page, context): Promise<void> {
    const storyContext = await getStoryContext(page, context);
    await verifyAxeRules(page, storyContext);
    await verifyHTMLSnapshots(page);
    await verifyImageSnapshots(page, storyContext, context);
  },
};

module.exports = config;
