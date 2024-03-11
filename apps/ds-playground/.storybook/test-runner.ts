import { StoryContext } from '@storybook/react';
import {
  getStoryContext,
  TestContext,
  TestRunnerConfig,
} from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
import {
  configureToMatchImageSnapshot,
  MatchImageSnapshotOptions,
} from 'jest-image-snapshot';
import { Page } from 'playwright';

import { env } from 'process';

import { screenShotOptions } from '../src/stories/__tests__/testUtils/storybook.testing.utils';

const customConfig: MatchImageSnapshotOptions = {
  allowSizeMismatch: true,
  comparisonMethod: 'ssim',
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: true,
  failureThreshold: 0.0003,
  failureThresholdType: 'percent',
  customDiffConfig: {
    ssim: 'fast',
  },
};

interface ViewPort {
  defaultViewport?: string;
  viewPortHeight?: number;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  viewports: Record<string, any>;
}
async function adjustViewport(page: Page, viewport: ViewPort): Promise<void> {
  if (viewport.defaultViewport || viewport.viewPortHeight) {
    const widthPx =
      viewport.viewports[viewport.defaultViewport || '']?.styles?.width;
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

async function verifyFocusSnapshot(
  focus: string,
  page: Page,
  context: TestContext,
  snapshotId?: string
): Promise<void> {
  const elementToFocus = page.locator(focus);
  await elementToFocus.focus();
  const imageFocused = await page.screenshot(screenShotOptions);
  expect(imageFocused).toMatchImageSnapshot({
    customSnapshotIdentifier: `${context.id}-focused${snapshotId ?? ''}-snap`,
    customSnapshotsDir: `apps/ds-playground/src/stories/__tests__/__image_snapshots__/${
      context.id.split('--')[0]
    }`,
  });
  if (await elementToFocus.isVisible()) {
    await page.$eval(`${focus}`, (el: HTMLElement) => el.blur());
  }
}

async function verifyHoverSnapshot(
  hover: string,
  page: Page,
  context: TestContext,
  snapshotId?: string
): Promise<void> {
  const elementToHover = page.locator(hover);
  await elementToHover.hover();
  const imageHovered = await page.screenshot(screenShotOptions);
  expect(imageHovered).toMatchImageSnapshot({
    customSnapshotIdentifier: `${context.id}-hovered${snapshotId ?? ''}-snap`,
    customSnapshotsDir: `apps/ds-playground/src/stories/__tests__/__image_snapshots__/${
      context.id.split('--')[0]
    }`,
  });
  await page.mouse.move(0, 0);
  await page.mouse.click(0, 0);
}

async function verifyClickSnapshot(
  click: string,
  page: Page,
  context: TestContext,
  snapshotId?: string
): Promise<void> {
  const elementToClick = page.locator(click);
  await elementToClick.click();
  const imageClicked = await page.screenshot(screenShotOptions);
  expect(imageClicked).toMatchImageSnapshot({
    customSnapshotIdentifier: `${context.id}-clicked${snapshotId ?? ''}-snap`,
    customSnapshotsDir: `apps/ds-playground/src/stories/__tests__/__image_snapshots__/${
      context.id.split('--')[0]
    }`,
  });
  if (await elementToClick.isVisible()) {
    await page.$eval(`${click}`, (el: HTMLElement) => el.blur());
  }
  await page.mouse.move(0, 0);
  await page.mouse.click(0, 0);
}

async function handleSnapshotSelectors(
  snapshotVerifier: (
    selectors: string,
    page: Page,
    context: TestContext,
    snapshotId?: string
  ) => Promise<void>,
  selectors: string | Array<string>,
  page: Page,
  context: TestContext
): Promise<void> {
  if (!selectors) {
    return;
  }

  if (typeof selectors === 'string') {
    await snapshotVerifier(selectors, page, context);
  } else if (Array.isArray(selectors)) {
    for (const [index, value] of selectors.entries()) {
      await snapshotVerifier(value, page, context, index.toString());
    }
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
    customSnapshotsDir: `apps/ds-playground/src/stories/__tests__/__image_snapshots__/${
      context.id.split('--')[0]
    }`,
  });
  const hover = storyContext.parameters.imageSnapshot?.hover;
  await handleSnapshotSelectors(verifyHoverSnapshot, hover, page, context);

  const focus = storyContext.parameters.imageSnapshot?.focus;
  await handleSnapshotSelectors(verifyFocusSnapshot, focus, page, context);

  const click = storyContext.parameters.imageSnapshot?.click;
  await handleSnapshotSelectors(verifyClickSnapshot, click, page, context);

  const scroll = storyContext.parameters.imageSnapshot?.scroll;
  if (scroll) {
    await page.evaluate((scroll) => {
      window.scrollBy(scroll.xPixels ?? 0, scroll.yPixels ?? 0);
    }, scroll);
    const imageScrolled = await page.screenshot(screenShotOptions);
    expect(imageScrolled).toMatchImageSnapshot({
      customSnapshotIdentifier: `${context.id}-scrolled-snap`,
      customSnapshotsDir: `apps/ds-playground/src/stories/__tests__/__image_snapshots__/${
        context.id.split('--')[0]
      }`,
    });
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }
}

async function verifyHTMLSnapshots(
  page: Page,
  storyContext: StoryContext
): Promise<void> {
  if (storyContext.parameters.HTMLSnapshot?.disable) {
    return;
  }
  const elementHandler = await page.$('#storybook-root');
  const innerHTML = await elementHandler?.innerHTML();
  await expect(innerHTML).toMatchSnapshot();
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

  await checkA11y(page, '#storybook-root', {
    detailedReport: true,
    detailedReportOptions: {
      html: true,
    },
    verbose: false,
    axeOptions: storyContext.parameters?.a11y?.options,
  });
}

const config: TestRunnerConfig = {
  setup(): void {
    const toMatchImageSnapshot = configureToMatchImageSnapshot({
      ...customConfig,
    });
    expect.extend({ toMatchImageSnapshot });
  },

  async preVisit(page, context) {
    await injectAxe(page);
    const storyContext = await getStoryContext(page, context);
    await adjustViewport(page, storyContext.parameters.viewport);
  },

  async postVisit(page, context): Promise<void> {
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    //BUG: networkidle henger når man oppdaterer tester samtidig som devserver med HMR kjører. Fungerer etter npm run build && npm run start:static
    !env.HMR && (await page.waitForLoadState('networkidle'));
    await page.evaluate(async () => await document.fonts.ready);

    const storyContext = (await getStoryContext(page, context)) as StoryContext;
    await verifyAxeRules(page, storyContext);
    await verifyHTMLSnapshots(page, storyContext);
    await verifyImageSnapshots(page, storyContext, context);
  },
};

module.exports = config;
