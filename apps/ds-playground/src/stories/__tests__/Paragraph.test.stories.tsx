import { AxePuppeteer } from '@axe-core/puppeteer';
import {
  getParagraphVariantDefault,
  Paragraph,
  ParagraphProps,
  paragraphVariantArr,
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
  component: Paragraph,
  title: 'Tester/Paragraph',
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
    variant: {
      table: { disable: true },
      options: [...paragraphVariantArr],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Paragraph>;

const defaultArgs: ParagraphProps = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
  variant: getParagraphVariantDefault(),
};
const Template: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
    <Paragraph {...args} />
  </div>
);

// Når Paragraph har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLParagraphElement | null): void => {
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

    const refId = await page.$eval(`${wrapper} > p`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når Paragraph har en id, så har elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'ParagraphId',
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > p`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('ParagraphId');
  },
};

// Når Paragraph har en custom CSS, så vises custom stil
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

    const classNameAttribute = await page.$eval(`${wrapper} > p`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når Paragraph har en lang, så har elementet lang satt
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

    const langAttribute = await page.$eval(`${wrapper} > p`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når Paragraph har dataTestid, så har elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': 'ParagraphID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > p`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('ParagraphID');
  },
};

// Når Paragraph instansieres, så finnes <p>-elementet
export const IsPElement = Template.bind({});
IsPElement.storyName = 'Is <p>-element (B1)';
IsPElement.args = {
  ...defaultArgs,
};
IsPElement.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const paragraphElement = await page.$(`${wrapper} > p`);
    expect(paragraphElement).toBeTruthy();
  },
};

const TemplateWithMarkup: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
    <Paragraph {...args}>
      <span>
        {'Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. ' +
          'I dette tilfellet skriver bare litt ekstra tekst for å få litt '}
        <strong>{'innhold '}</strong>
        {', men '}
        <em>{'normalt '}</em>
        {
          'vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en '
        }
        <a
          href={
            'https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code'
          }
        >
          {'lenke'}
        </a>
        {' for å sjekke været i '}
        <code>{'Code '}</code>
        {'som er en '}
        <small>{'small '}</small>
        {'landsby i et land med mange '}
        <mark>{'mark '}</mark>
        {'og et språk uten '}
        <b>{'b '}</b>
        {'eller '}
        <i>{'i'}</i>
        {'.'}
      </span>
    </Paragraph>
  </div>
);

// Når Paragraph inkluderer markup, så får markupen riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup (A2, B2)';
WithMarkup.args = {
  ...defaultArgs,
};
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

const TemplateWithTwoParagraphs: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
    <Paragraph {...args} />
    <Paragraph {...args} />
  </div>
);

// Når Paragraph instansieres, får den riktige default-verdier
export const Defaults = TemplateWithTwoParagraphs.bind({});
Defaults.storyName = 'Defaults Variant Standard (A1, B2)';
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

// Når Paragraph er et ingress, så får elementet riktige verdier
export const VariantIngress = TemplateWithTwoParagraphs.bind({});
VariantIngress.storyName = 'Variant Ingress (A1)';
VariantIngress.args = {
  ...defaultArgs,
  variant: 'ingress',
};
VariantIngress.argTypes = {
  ...VariantIngress.argTypes,
  variant: { table: { disable: false } },
};
VariantIngress.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Paragraph har spacing, så får elementet en margin under avsnittet
export const WithSpacing = TemplateWithTwoParagraphs.bind({});
WithSpacing.storyName = 'With Spacing Variant Standard (A3)';
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

// Når Paragraph er et ingress og har spacing, så får elementet riktige verdier og en margin under ingresset
export const VariantIngressWithSpacing = TemplateWithTwoParagraphs.bind({});
VariantIngressWithSpacing.storyName = 'With Spacing Variant Ingress (A3)';
VariantIngressWithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
  variant: 'ingress',
};
VariantIngressWithSpacing.argTypes = {
  ...VariantIngressWithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
  variant: { table: { disable: false } },
};
VariantIngressWithSpacing.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};
