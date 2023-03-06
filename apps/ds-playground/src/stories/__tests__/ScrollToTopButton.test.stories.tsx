import { AxePuppeteer } from '@axe-core/puppeteer';
import {
  getVisibilityThresholdDefault,
  ScrollToTopButton,
  ScrollToTopButtonProps,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { ComponentStory, Meta } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
// @skatteeteaten/ds-core-designtokens er angitt som symlink i package.json
// derfor vil typecheck feile hvis pakken ikke er bygget, derfor bryter vi nx module boundaries her
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import palette from 'libs/ds-core-designtokens/lib/designtokens/palette.json';
import { Page } from 'puppeteer';

import { category } from '../../../.storybook/helpers';
import { webComponent } from '../../../.storybook/webcomponent-decorator';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';
const defaultButtonText = 'Til toppen';

const verifyMatchSnapShot = async (page: Page): Promise<void> => {
  const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
  expect(innerHtml).toMatchSnapshot();
};

const verifyMatchImageSnapShot = async (page: Page): Promise<void> => {
  const image = await page.screenshot(screenShotOptions);
  expect(image).toMatchImageSnapshot();
};

const verifyAxeRules = async (page: Page): Promise<void> => {
  const axeResults = await new AxePuppeteer(page).include(wrapper).analyze();
  expect.extend(toHaveNoViolations);
  expect(axeResults).toHaveNoViolations();
};

const verifySnapshotsAndAxeRules = async (page: Page): Promise<void> => {
  await verifyMatchSnapShot(page);
  await verifyMatchImageSnapShot(page);
  await verifyAxeRules(page);
};

export default {
  component: ScrollToTopButton,
  title: 'Tester/ScrollToTopButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },

    // Props
    classNames: {
      table: { disable: true },
    },
    visibilityThreshold: {
      table: {
        category: category.props,
        disable: true,
        //type: { summary: 'number' },
        defaultValue: { summary: getVisibilityThresholdDefault() },
      },
    },
    shadowRootNode: { table: { disable: true } },
    children: { table: { disable: true, category: category.props } },
  },
  parameters: {
    backgrounds: {
      default: 'graphite-70',
      values: [
        {
          name: 'graphite-70',
          value: palette[':root,\n:host']['--palette-graphite-70'],
        },
      ],
    },
  },
} as Meta<ScrollToTopButtonProps>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
  <div className={'noTransition height100vh'} data-test-block>
    <main className={'scrollToTopContainer'} tabIndex={-1}>
      <ExternalLayout />
      <ScrollToTopButton {...args} />
    </main>
  </div>
);

const defaultArgs = {
  visibilityThreshold: 0,
};

// Når ScrollToTopButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';

WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};

WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const refId = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.id
    );
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når MegaButton har en id, så har button-element id
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'htmlid',
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const elementid = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.getAttribute('id')
    );
    expect(elementid).toBe('htmlid');
  },
};

// Når ScrollToTopButton har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  ...WithCustomCss.argTypes,
  className: {
    table: { disable: false },
  },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const classNameAttribute = await page.$eval(
      `${wrapper} > main > div:nth-child(2)`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når ScrollToTopButton har en custom classNames, så vises custom stil på riktig sted
export const WithCustomClassNames = Template.bind({});
WithCustomClassNames.storyName = 'With Custom ClassNames (FA3)';
WithCustomClassNames.args = {
  ...defaultArgs,
  classNames: {
    container: 'dummyClassname',
    button: 'dummyClassname',
    iconContainer: 'dummyClassname',
    icon: 'dummyClassname',
    label: 'dummyClassname',
  },
};
WithCustomClassNames.argTypes = {
  ...WithCustomClassNames.argTypes,
  classNames: {
    table: { disable: false },
  },
};
WithCustomClassNames.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const classNameAttribute = await page.$eval(
      `${wrapper}> main > div > button`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når Button har en lang, så har button-element lang
export const WithLang = Template.bind({});
WithLang.storyName = 'With Lang (FA4)';
WithLang.args = {
  ...defaultArgs,
  lang: 'nb',
};
WithLang.argTypes = {
  ...WithLang.argTypes,
  lang: { table: { disable: false } },
};
WithLang.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const langAttribute = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når ScrollToTopButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123');
  },
};

// Når ScrollToTopButton instansieres, så får den riktige default-verdier og rendrer riktig
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, A3, B4)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  visibilityThreshold: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > main > div > button`);
    expect(buttonElement).toMatchSnapshot();

    await verifyMatchSnapShot(page);

    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > main > div > button`, (el: any) =>
      el.blur()
    );

    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når ScrollToTopButton har children, så settes teksten i button-elementet
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With Children(A2)';
WithChildren.args = {
  ...defaultArgs,
  children: 'dummy string',
};
WithChildren.argTypes = {
  ...WithChildren.argTypes,
  children: { table: { disable: false } },
};
WithChildren.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > main > div > button`);
    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('dummy string');
  },
};

// Når ScrollToTopButton lastes i en small skjerm så får den riktig plassering
export const WithMobileScreen = Template.bind({});
WithMobileScreen.storyName = 'With Small Screen (A5)';
WithMobileScreen.args = {
  ...defaultArgs,
};
WithMobileScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);
  },
};

// Når ScrollToTopButton lastes i en bred skjerm så får den riktig plassering
export const WithWideScreen = Template.bind({});
WithWideScreen.storyName = 'With Wide Screen (A6)';
WithWideScreen.args = {
  ...defaultArgs,
};
WithWideScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);
  },
};

// Når ScrollToTopButton har visibilityThreshold så vises/skjules knappen ved riktig innslagspunkt for scroll
export const WithVisibilityThreshold = Template.bind({});
WithVisibilityThreshold.storyName =
  'With VisibilityThreshold and Scrolling (A7, A8)';
WithVisibilityThreshold.args = {
  ...defaultArgs,
  visibilityThreshold: 3,
};
WithVisibilityThreshold.argTypes = {
  ...WithVisibilityThreshold.argTypes,
  visibilityThreshold: { table: { disable: false } },
};
WithVisibilityThreshold.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
  async puppeteerTest(page: Page): Promise<void> {
    await verifyAxeRules(page);

    const className = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.className
    );
    expect(className.match('visible')).toBeFalsy();

    const imageAtTop = await page.screenshot(screenShotOptions);
    expect(imageAtTop).toMatchImageSnapshot();

    await page.evaluate(() => {
      window.scrollBy(0, 3);
    });

    const classNameScrolledDown = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.className
    );
    expect(classNameScrolledDown.match('visible')).toBeTruthy();

    const imageScrolledDown = await page.screenshot(screenShotOptions);
    expect(imageScrolledDown).toMatchImageSnapshot();

    await page.evaluate(() => {
      window.scrollBy(0, -3);
    });

    const classNameScrolledUp = await page.$eval(
      `${wrapper}> main > div > button`,
      (el) => el.className
    );
    expect(classNameScrolledUp.match('visible')).toBeFalsy();

    const imageScrolledUp = await page.screenshot(screenShotOptions);
    expect(imageScrolledUp).toMatchImageSnapshot();
  },
};

const TemplateWithShadowDom: ComponentStory<typeof ScrollToTopButton> = (
  args
) => {
  const element = document.querySelector('scrolltotop-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div className={'noTransition height100vh'} data-test-block>
      <main className={'scrollToTopContainer'} tabIndex={-1}>
        <ExternalLayout />
        <ScrollToTopButton {...args} shadowRootNode={shadowRoot ?? undefined} />
      </main>
    </div>
  );
};
// Når ScrollToTopButton lastes i en shadowDom så tegnes den riktig og klarer å sette focus til main elementet som befinner i et custom element
export const WithShadowDom = TemplateWithShadowDom.bind({});
WithShadowDom.storyName = 'With ShadowDom (B4)';
WithShadowDom.args = {
  ...defaultArgs,
};
WithShadowDom.decorators = [webComponent];
WithShadowDom.parameters = {
  customElementName: 'scrolltotop-customelement',
  async puppeteerTest(page: Page): Promise<void> {
    const customElement = await page.$(`scrolltotop-customelement`);
    const buttonElement = await customElement?.$(
      `pierce/${wrapper} > main > div > button`
    );

    expect(buttonElement).not.toBeNull();
    await buttonElement?.click();
    await page.waitForSelector(`pierce/main:focus`);
  },
};

// Innbakte tekster bruker riktig key
export const WithTranslation = Template.bind({});
WithTranslation.storyName = 'With Translation (A4)';

WithTranslation.args = {
  ...defaultArgs,
};
WithTranslation.argTypes = {
  ...WithTranslation.argTypes,
};
WithTranslation.parameters = {
  locale: 'cimode',
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);
    const label = await page.$eval(
      `${wrapper} > main > div > button`,
      (el) => el.textContent
    );
    expect(label).toBe('scrolltotopbutton.Title');
  },
};
