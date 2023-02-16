import { AxePuppeteer } from '@axe-core/puppeteer';
import { Blockquote, BlockquoteProps } from '@skatteetaten/ds-typography';
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
  component: Blockquote,
  title: 'Tester/Blockquote',
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
  },
} as ComponentMeta<typeof Blockquote>;

const defaultArgs: BlockquoteProps = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
};

const Template: ComponentStory<typeof Blockquote> = (args) => (
  <div data-test-block>
    <Blockquote {...args} />
  </div>
);

// Når Blockquote har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLQuoteElement | null): void => {
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

    const refId = await page.$eval(`${wrapper} > blockquote`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når Blockquote har en id, så har elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'BlockquoteId',
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('BlockquoteId');
  },
};

// Når Blockquote har en custom CSS, så vises custom stil
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
      `${wrapper} > blockquote`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når Blockquote har en lang, så har elementet lang satt
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

    const langAttribute = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når Blockquote har dataTestid, så har elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': 'BlockquoteID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('BlockquoteID');
  },
};

// Når Blockquote instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

const TemplateWithMarkup: ComponentStory<typeof Blockquote> = (args) => (
  <div data-test-block>
    <Blockquote {...args}>
      <div>
        {'Manowar Manowar living on the road '}
        <a href={'https://en.wikipedia.org/wiki/Manowar'}>{'lenke'}</a>
      </div>
      <div>
        {"When we're on "}
        <strong>{'strong '}</strong>
        {'explode '}
        <em>{'italic em '}</em>
      </div>
      <div>
        {"We don't attract "}
        <code>{'code wimps '}</code>
        {"'cause we're too "}
        <mark>{'mark'}</mark>
      </div>
      <div>
        {'Just '}
        <i>{'italic i '}</i>
        {'true '}
        <small>{'small '}</small>
        {"people that's Manowar's "}
        <b>{'b'}</b>
      </div>
    </Blockquote>
  </div>
);

// Når Blockquote instansieres med markup, får markup riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup (A2, B1 - 2 av 2)';
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

const TemplateWithTwoBlockquotes: ComponentStory<typeof Blockquote> = (
  args
) => (
  <div data-test-block>
    <Blockquote {...args} />
    <Blockquote {...args} />
  </div>
);

// Når Blockquote har spacing, så får elementet en margin under sitatet
export const WithSpacing = TemplateWithTwoBlockquotes.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};
WithSpacing.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};
