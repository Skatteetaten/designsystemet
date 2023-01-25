import { AxePuppeteer } from '@axe-core/puppeteer';
import { List, listAsArr, ListProps } from '@skatteetaten/ds-typography';
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
  component: List,
  title: 'Tests / List',
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
    },
    hasIndent: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    // Tags
    as: {
      table: { disable: true },
      options: [...listAsArr],
      control: 'inline-radio',
    },
  },
} as ComponentMeta<typeof List>;

const defaultArgs: ListProps = {
  children: [
    <List.Element key={'listElement_1'}>
      {'Kjenner du behovet til brukeren?'}
    </List.Element>,
    <List.Element key={'listElement_2'}>
      {'Er du sikker på at du kjenner behovet til brukeren?'}
    </List.Element>,
    <List.Element key={'listElement_3'}>{'Snakk med andre.'}</List.Element>,
  ],
};
const Template: ComponentStory<typeof List> = (args) => (
  <div data-test-block>
    <p>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </p>
    <List {...args} />
    <p>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </p>
  </div>
);

// Når List har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLUListElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const refId = await page.$eval(`${wrapper} > ul`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når List har en id, så har elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.args = {
  ...defaultArgs,
  id: 'ListId',
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('ListId');
  },
};

// Når List har en custom CSS, så vises custom stil
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

    const classNameAttribute = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når List har en lang, så har elementet lang satt
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

    const langAttribute = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når List har dataTestid, så har elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': 'ListID',
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('ListID');
  },
};

// Når List instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName =
  'Defaults Variant Bullet (A1 - 1 av 2, B1 - 1 av 2, B2 - 1 av 2)';
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
Defaults.args = {
  ...defaultArgs,
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const listElement = await page.$(`${wrapper} > ul`);
    expect(listElement).toBeTruthy();
  },
};

// Når List har en as, får elementet riktig tag og ser riktig ut
export const VariantNumber = Template.bind({});
VariantNumber.storyName = 'Variant Number(A1 - 2 av 2, B1 - 2 av 2)';
VariantNumber.argTypes = {
  ...VariantNumber.argTypes,
  as: {
    table: { disable: false },
  },
};
VariantNumber.args = {
  ...defaultArgs,
  as: 'ol',
};
VariantNumber.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const listElement = await page.$(`${wrapper} > ol`);
    expect(listElement).toBeTruthy();
  },
};

// Når List instansieres med markup, får markup riktig styling
export const WithMarkup = Template.bind({});
WithMarkup.storyName = 'With Markup (A2, B2 - 2 av 2)';
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.args = {
  ...defaultArgs,
  children: [
    <List.Element key={'listElement_1'}>
      {'Kjenner du behovet til '}
      <strong>{'brukeren?'}</strong>
    </List.Element>,
    <List.Element key={'listElement_2'}>
      {'Er du sikker på at du kjenner '}
      <a href={'https://skatteetaten.no'}>{'behovet til brukeren?'}</a>
    </List.Element>,
    <List.Element key={'listElement_3'}>
      {'Snakk med andre '}
      <em>{'italic '}</em>
      <mark>{'mark'}</mark>
    </List.Element>,
  ],
};
WithMarkup.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når List har spacing, så får elementet en margin under listen
export const WithSpacing = Template.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når List ikke har innrykk, så får elementet ingen margin foran listelementene
export const WithoutIndent = Template.bind({});
WithoutIndent.storyName = 'Without Indent (A4)';
WithoutIndent.argTypes = {
  ...WithoutIndent.argTypes,
  hasIndent: { table: { disable: false } },
};
WithoutIndent.args = {
  ...defaultArgs,
  hasIndent: false,
};
WithoutIndent.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};
