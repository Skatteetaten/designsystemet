import { useState } from 'react';

import { AxePuppeteer } from '@axe-core/puppeteer';
import { InlineButton } from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

const elementId = 'htmlId';
const defaultButtonText = 'Legg til rapport';

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
  component: InlineButton,
  title: 'Tester/InlineButton',
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
    iconPosition: {
      table: { disable: true },
      options: [...positionArr],
      control: 'radio',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
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
} as ComponentMeta<typeof InlineButton>;

const Template: ComponentStory<typeof InlineButton> = (args) => (
  <div className={'noTransition'} data-test-block>
    <InlineButton {...args} svgPath={args.svgPath}>
      {args.children}
    </InlineButton>
  </div>
);

const defaultArgs = {
  children: defaultButtonText,
};

// Når InlineButton har en ref, så får dom button elementet ref forwarded
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

// Når InlineButton har satt id, så har id en verdi
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: elementId,
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe(elementId);
  },
};

// Når InlineButton har en custom CSS, så vises custom stil
const dummyClassname = 'dummyClassname';
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: dummyClassname,
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
    expect(classNameAttribute).toContain(dummyClassname);
  },
};

// Når InlineButton har en lang, så har button-element lang
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

// Når InlineButton har satt dataTestid, så har dataTestId en verdi
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

    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(id).toBe('123ID');
  },
};

// Når InlineButton instansieres, får den default iconPosition left
// Knapp må også ha tekst/children
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 - 1 av 3, B1 - 1 av 2)';
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

// Når InlineButton har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 - 2 av 3)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. ' +
    'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};
WithLongText.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når InlineButton har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text And Breaking (A1 - 3 av 3)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.' +
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};
WithLongTextBreaking.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når InlineButton har ett ikon uten posisjon oppgitt, så vises dette ikonet på venstre side (default).
// Tester også for de icon props som er relevant for saken med systemIcon som er brukt.
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3 - 1 av 3, A4, B4)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { table: { disable: false } },
};
WithIcon.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const svgElement = await page.$(`${wrapper} > button svg`);
    expect(svgElement).toBeTruthy();

    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);
  },
};

// Når InlineButton har et custom ikon, så vises dette ikonet
export const WithCustomIcon = Template.bind({});
WithCustomIcon.storyName = 'With Custom Icon (A3 - 2 av 3)';
WithCustomIcon.args = {
  ...defaultArgs,
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
};
WithCustomIcon.argTypes = {
  ...WithCustomIcon.argTypes,
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};
WithCustomIcon.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når InlineButton har en veldig lang tekst og det er et ikon med position right så skal tekst høyrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A3 - 3 av 3)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  children:
    'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. ' +
    'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  children: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};
WithLongTextAndIcon.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når InlineButton har ett ikon med posisjon right, så vises dette ikonet på høyre side.
export const WithIconRight = Template.bind({});
WithIconRight.storyName = 'With Icon Right (A5)';
WithIconRight.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  iconPosition: 'right',
};
WithIconRight.argTypes = {
  ...WithIconRight.argTypes,
  iconPosition: {
    table: { disable: false },
  },
};
WithIconRight.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når InlineButton har prop disabled, så er knapp disabled og stil er satt til disabled
export const Disabled = Template.bind({});
Disabled.storyName = 'With Disabled (B5 - 1 av 2)';
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

// Når InlineButton har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.storyName = 'With Disabled Icon (B5 - 2 av 2)';
DisabledWithIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  disabled: true,
};
DisabledWithIcon.argTypes = {
  ...DisabledWithIcon.argTypes,
  disabled: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};
DisabledWithIcon.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();
  },
};

// Når InlineButton har prop type, så har button-elementet type satt
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
    await verifySnapshotsAndAxeRules(page);

    const type = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('type')
    );
    expect(type).toBe('submit');
  },
};

// Når InlineButton har aria-describedby, så har button-element aria-describedby
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: elementId,
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const ariaDescribedby = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('aria-describedby')
    );
    expect(ariaDescribedby).toBe(elementId);
  },
};

// Når InlineButton har satt accessKey, så har accessKey en verdi
const accessKeyValue = 'a';
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B3)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: accessKeyValue,
};
WithAccesskey.argTypes = {
  ...WithAccesskey.argTypes,
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const accessKey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accessKey')
    );
    expect(accessKey).toBe(accessKeyValue);
  },
};

const nyTekstPaaKnapp = 'Ny tekst på knapp slik at vi ser at event fungerte';
// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer teksten på knappen.
const OnBlurTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste at onBlur virker'
  );
  return (
    <div className={'noTransition'} data-test-block>
      <InlineButton {...args} onBlur={(): void => setButtText(nyTekstPaaKnapp)}>
        {buttText}
      </InlineButton>
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
    expect(text).toBe(nyTekstPaaKnapp);
  },
};

// Når brukeren klikker på knappen, så kalles funksjonen i onClick prop.
// onClick-event endrer teksten på knappen.
const OnClickTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste at onClick virker'
  );
  return (
    <div className={'noTransition'} data-test-block>
      <InlineButton
        {...args}
        onClick={(): void => setButtText(nyTekstPaaKnapp)}
      >
        {buttText}
      </InlineButton>
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

    await page.waitForSelector(`${wrapper} > button`);
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(nyTekstPaaKnapp);
  },
};

// Når brukeren setter focus på knappen, så kalles funksjonen i onFocus prop.
// onFocus-event endrer teksten på knappen.
const OnFocusTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Gi knapp fokus for å teste at onFocus virker'
  );
  return (
    <div className={'noTransition'} data-test-block>
      <InlineButton
        {...args}
        onFocus={(): void => setButtText(nyTekstPaaKnapp)}
      >
        {buttText}
      </InlineButton>
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
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();

    await page.waitForSelector(`${wrapper} > button`);
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(nyTekstPaaKnapp);
  },
};
