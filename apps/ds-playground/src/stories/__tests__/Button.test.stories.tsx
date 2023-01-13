import { useState } from 'react';

import { AxePuppeteer } from '@axe-core/puppeteer';
import { Button, buttonVariantArr } from '@skatteetaten/ds-buttons';
import { SendSVGpath } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

const defaultButtonText = 'Klikk her';

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
  component: Button,
  title: 'Tests / Button',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    variant: {
      table: { disable: true },
      options: [...buttonVariantArr],
      control: 'radio',
    },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
    <Button {...args} variant={args.variant} svgPath={args.svgPath}>
      {args.children}
    </Button>
  </div>
);

const defaultArgs = {
  children: defaultButtonText,
};

// Når Button har en ref, så får dom button elementet ref forwarded
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

    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når Button har en id, så har button-element id
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

    const elementid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(elementid).toBe('htmlid');
  },
};

// Når Button har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  variant: 'secondary',
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

    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
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

    const langAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når Button har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123ID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123ID');
  },
};

// Når Button instansieres, får den default variant primary.
// Knapp må også ha tekst/children
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant Primary (B1 - 1 av 2, A1 - 1 av 4)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const element = await page.$(wrapper);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const attributeType = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('type')
    );
    expect(attributeType).toBe('button');

    const buttonElement = await page.$(`${wrapper} > button`);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    await page.waitForTimeout(300);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når Button har en variant, så vises stilsett for varianten (secondary)
export const VariantSecondary = Template.bind({});
VariantSecondary.storyName = 'Variant Secondary (A1 - 2 av 4)';
VariantSecondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};
VariantSecondary.argTypes = {
  ...VariantSecondary.argTypes,
  variant: { table: { disable: false } },
};
VariantSecondary.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    await page.waitForTimeout(300);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når Button har en variant, så vises stilsett for varianten (tertiary)
export const VariantTertiary = Template.bind({});
VariantTertiary.storyName = 'Variant Tertiary (A1 - 3 av 4)';
VariantTertiary.args = {
  ...defaultArgs,
  variant: 'tertiary',
};
VariantTertiary.argTypes = {
  ...VariantTertiary.argTypes,
  variant: { table: { disable: false } },
};
VariantTertiary.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    await page.waitForTimeout(300);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når Button har en variant, så vises stilsett for varianten (danger)
export const VariantDanger = Template.bind({});
VariantDanger.storyName = 'Variant Danger (A1 - 4 av 4)';
VariantDanger.args = { ...defaultArgs, variant: 'danger' };
VariantDanger.argTypes = {
  ...VariantDanger.argTypes,
  variant: { table: { disable: false } },
};
VariantDanger.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    await page.waitForTimeout(300);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når Button har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 delvis)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};
WithLongText.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Button har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text Breaking (A1 delvis)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Herharviikkeikonsådaskaltekstenmidtstilles.Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Herharviikkeikonsådaskaltekstenmidtstilles',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};
WithLongTextBreaking.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Button har en veldig lang tekst og det er et ikon så skal tekst venstrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A1 delvis)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  children: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};
WithLongTextAndIcon.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Button har ett ikon, så vises ikonet. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3, B3)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { table: { disable: false } },
};
WithIcon.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        role: el.getAttribute('role'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaLabelledBy: el.getAttribute('aria-labeledby'),
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.role).toBe('img');
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);
  },
};

// Når Button har prop disabled, så er knapp disabled og stil er satt til disabled
export const Disabled = Template.bind({});
Disabled.storyName = 'Disabled (B5 - 1 av 2)';
Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
Disabled.argTypes = {
  ...Disabled.argTypes,
  disabled: { table: { disable: false } },
};
Disabled.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();
  },
};

// Når Button har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.storyName = 'Disabled With Icon (B5 - 2 av 2)';
DisabledWithIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
  disabled: true,
};
DisabledWithIcon.argTypes = {
  ...DisabledWithIcon.argTypes,
  svgPath: { table: { disable: false } },
  disabled: { table: { disable: false } },
};
DisabledWithIcon.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B1 - 2 av 2)';
WithType.args = {
  ...defaultArgs,
  type: 'submit',
};
WithType.argTypes = {
  ...WithType.argTypes,
  type: { table: { disable: false } },
};
WithType.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    verifySnapshotsAndAxeRules(page);

    const type = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('type')
    );
    expect(type).toBe('submit');
  },
};

// Når Button har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'id1',
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaDescribedby: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaDescribedby).toBe('id1');
  },
};

// Når Button har satt accessKey, så har accessKey en verdi
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B3)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 's',
};
WithAccesskey.argTypes = {
  ...WithAccesskey.argTypes,
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const accesskey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accesskey')
    );
    expect(accesskey).toBe('s');
  },
};

// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer teksten på knappen.
const OnBlurTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onBlur event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <Button
        {...args}
        variant={args.variant}
        onBlur={(): void => setButtText('Knapp er bluret')}
      >
        {buttText}
      </Button>
    </div>
  );
};
export const WithOnBlur = OnBlurTemplate.bind({});
WithOnBlur.storyName = 'With onBlur (A2 delvis)';
WithOnBlur.args = {
  ...defaultArgs,
};
WithOnBlur.argTypes = {
  ...WithOnBlur.argTypes,
  onBlur: { table: { disable: false } },
};
WithOnBlur.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);
    await buttonElement?.focus();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    const imageBlured = await page.screenshot(screenShotOptions);
    expect(imageBlured).toMatchImageSnapshot();

    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp er bluret');
  },
};

// Når brukeren klikker på knappen, så kalles funksjonen i onClick prop.
// onClick-event endrer teksten på knappen.
const OnClickTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onClick event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <Button
        {...args}
        variant={args.variant}
        onClick={(): void => setButtText('Knapp er klikket')}
      >
        {buttText}
      </Button>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.storyName = 'With onClick (A2 delvis)';
WithOnClick.args = {
  ...defaultArgs,
};
WithOnClick.argTypes = {
  ...WithOnClick.argTypes,
  onClick: { table: { disable: false } },
};
WithOnClick.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);
    await buttonElement?.click();
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();

    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp er klikket');
  },
};

// Når brukeren setter focus på knappen, så kalles funksjonen i onFocus prop.
// onFocus-event endrer teksten på knappen.
const OnFocusTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onFocus event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <Button
        {...args}
        variant={args.variant}
        onFocus={(): void => setButtText('Knapp har fått fokus')}
      >
        {buttText}
      </Button>
    </div>
  );
};
export const WithOnFocus = OnFocusTemplate.bind({});
WithOnFocus.storyName = 'With onFocus (A2 delvis)';
WithOnFocus.args = {
  ...defaultArgs,
};
WithOnFocus.argTypes = {
  ...WithOnFocus.argTypes,
  onFocus: { table: { disable: false } },
};
WithOnFocus.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);

    const buttonElement = await page.$(`${wrapper} > button`);
    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp har fått fokus');
  },
};
