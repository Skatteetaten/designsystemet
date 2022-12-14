import {
  Heading,
  headingLevelArr,
  HeadingProps,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

const wrapper = '[data-test-block]';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: Heading,
  title: 'Tests / Heading',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    hasSpacing: { table: { disable: true } },
    as: {
      table: { disable: true },
    },
    level: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Heading>;

const headingAsTest = 'h2';
const defaultArgs: HeadingProps = {
  as: headingAsTest,
  level: 2,
  children: 'Dette er en heading',
};
const Template: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    <Heading {...args} />
  </div>
);

// Når Heading har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLHeadingElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.id
    );
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Heading har en id, så har elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.args = {
  ...defaultArgs,
  id: 'headingId',
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > ${headingAsTest}`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('headingId');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Heading har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  ...WithCustomCss.argTypes,
  className: { table: { disable: false } },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Heading har en lang, så har elementet lang satt
export const WithLang = Template.bind({});
WithLang.storyName = 'With Lang (FA4)';
WithLang.argTypes = {
  ...WithLang.argTypes,
  lang: { table: { disable: false } },
};
WithLang.args = {
  ...defaultArgs,
  lang: 'nb',
};
WithLang.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const langAttribute = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Heading har dataTestId, så har elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': 'HeadingID',
};
WithDataTestid.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestId = await page.$eval(`${wrapper} > ${headingAsTest}`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestId).toBe('HeadingID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

const TemplateWithMarkup: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    <Heading {...args} hasSpacing>
      {'Dette er den '}
      <a href={'https://skatteetaten.no'}>{'fyneste markup headingen'}</a>
      <em>{' som finnes i italic '}</em>
      <strong>{'og strong '}</strong>
      <mark>{'mark '}</mark>
      <code>{'code '}</code>
      {'med spacing under og en skrivefeil'}
    </Heading>
    <Heading {...args} />
  </div>
);

// Når Heading inkluderer markup, så får markupen riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup And String (A3, B2)';
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.args = {
  ...defaultArgs,
  children: 'Dette er den fineste string headingen uten markup',
};
WithMarkup.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

const TemplateWithAllLevels: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    {headingLevelArr.map((headingLevel, item) => {
      return (
        <Heading key={`level_${item}`} {...args} level={headingLevel}>
          {`Heading level ${headingLevel}`}
        </Heading>
      );
    })}
  </div>
);

// Når Heading instansieres, får den riktige default-verdier og ser riktig ut for alle levels
export const Defaults = TemplateWithAllLevels.bind({});
Defaults.storyName = 'Defaults All Levels (A1, A2 delvis)';
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.args = {
  ...defaultArgs,
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når Heading instansieres, ser den riktug ut for alle levels på mobil
export const DefaultsMobile = TemplateWithAllLevels.bind({});
DefaultsMobile.storyName =
  'Defaults All Levels On Small Screen (A1, A2 delvis)';
DefaultsMobile.args = {
  ...defaultArgs,
};
DefaultsMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Heading har spacing, så får elementet riktig margin under headingen
export const LevelsWithSpacing = TemplateWithAllLevels.bind({});
LevelsWithSpacing.storyName = 'With Spacing All Levels (A4 delvis)';
LevelsWithSpacing.argTypes = {
  ...LevelsWithSpacing.argTypes,
  hasSpacing: {
    table: { disable: false },
  },
};
LevelsWithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
LevelsWithSpacing.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når Heading har spacing, så får elementet riktig margin under headingen på mobil
export const LevelsWithSpacingMobile = TemplateWithAllLevels.bind({});
LevelsWithSpacingMobile.storyName =
  'With Spacing All Levels On Small Screen (A4 delvis)';
LevelsWithSpacingMobile.args = {
  ...defaultArgs,
  hasSpacing: true,
};
LevelsWithSpacingMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};
