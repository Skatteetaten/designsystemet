import { AxePuppeteer } from '@axe-core/puppeteer';
import {
  Heading,
  headingLevelArr,
  HeadingProps,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const refId = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.id
    );
    expect(refId).toBe('dummyIdForwardedFromRef');
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > ${headingAsTest}`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('headingId');
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const classNameAttribute = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const langAttribute = await page.$eval(
      `${wrapper} > ${headingAsTest}`,
      (el) => el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestId = await page.$eval(`${wrapper} > ${headingAsTest}`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestId).toBe('HeadingID');
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
  puppeteerTest: verifySnapshotsAndAxeRules,
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
  puppeteerTest: verifySnapshotsAndAxeRules,
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);
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
  puppeteerTest: verifySnapshotsAndAxeRules,
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
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);
  },
};
