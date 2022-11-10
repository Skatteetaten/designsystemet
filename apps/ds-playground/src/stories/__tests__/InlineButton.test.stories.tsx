import { useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import '../classnames.stories.css';

// TODO FRONT-893 legge til snapshot når det fungerer for linux

const wrapper = '[data-test-block]';
const elementId = 'dummyId';
const defaultButtonText = 'Legg til rapport';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

const testSnapshot = async (page: ElementHandle): Promise<void> => {
  const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
  expect(innerHtml).toMatchSnapshot();

  const image = await page.screenshot(screenShotOptions);
  expect(image).toMatchImageSnapshot();
};

export default {
  component: InlineButton,
  title: 'Tests / InlineButton',
} as ComponentMeta<typeof InlineButton>;

const Template: ComponentStory<typeof InlineButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTranstion'} data-test-block>
    <InlineButton {...args} svgPath={args.svgPath}>
      {args.children}
    </InlineButton>
  </div>
);

const defaultArgs = {
  children: defaultButtonText,
};

// Når InlineButton har en ref, så får dom button elementet ref forwarded
const forwardedFromRefId = 'dummyId';
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = forwardedFromRefId;
    }
  },
  children: defaultButtonText,
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe(forwardedFromRefId);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når InlineButton har satt id, så har id en verdi
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: elementId,
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe(elementId);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
    control: 'select',
    options: [' ', dummyClassname],
    table: { defaultValue: { summary: '' } },
  },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain(dummyClassname);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har satt dataTestid, så har dataTestId en verdi
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA4)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': elementId,
};
WithDataTestid.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(id).toBe(elementId);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når InlineButton instansieres, får den default iconPosition left
// Knapp må også ha tekst/children
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 - 1 av 3)';
Defaults.args = {
  children: defaultButtonText,
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const image = await page.screenshot(screenShotOptions);
    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 - 2 av 3)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
};
WithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text And Breaking (A1 - 3 av 3)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.',
};
WithLongTextBreaking.parameters = {
  puppeteerTest: testSnapshot,
};

// Når InlineButton har ett ikon uten posisjon oppgitt, så vises dette ikonet på venstre side (default).
// Tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3 - 1 av 3, A4, B4)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { control: false },
};
WithIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        role: el.getAttribute('role'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaLabelledBy: el.getAttribute('aria-labelledby'),
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.role).toBe('img');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har et custom ikon, så vises dette ikonet
export const WithCustomIcon = Template.bind({});
WithCustomIcon.storyName = 'With Custom Icon (A3 - 2 av 3)';
WithCustomIcon.args = {
  ...defaultArgs,
  svgPath: (
    <path
      d={
        'M20.18,8.63v-1.27h-1.24v-1.37h-1.24v-1.27h-1.45v-1.37h-1.24v-1.37h-6.52v1.37h-1.35v1.37h-1.34v1.27h-1.24v1.37h-1.35v1.27H1.86v6.73h1.34v1.27h1.35v1.37h1.24v1.27h1.34v1.37h1.35v1.37h6.52v-1.37h1.35v-1.37h1.34v-1.27h1.24v-1.37h1.34v-1.27h1.58v-6.73h-1.68Zm-5.21,5.38h-1.3v1.33h-3.93v-1.33h-1.3v-3.98h1.3v-1.33h3.93v1.33h1.3v3.98Zm3.27-3.98h-1.31v-1.33h-1.3v-1.33h-1.31v-1.33h1.31v1.33h1.3v1.33h1.31v1.33Z'
      }
    />
  ),
};
WithCustomIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har en veldig lang tekst og det er et ikon med position right så skal tekst høyrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A3 - 3 av 3)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  children:
    'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  svgPath: { control: false },
};
WithLongTextAndIcon.parameters = {
  puppeteerTest: testSnapshot,
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
  svgPath: { control: false },
};
WithIconRight.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har prop disabled, så er knapp disabled og stil er satt til disabled
export const Disabled = Template.bind({});
Disabled.storyName = 'With Icon Right (B5 - 1 av 2)';
Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
Disabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.storyName = 'With Icon Right (B5 - 2 av 2)';
DisabledWithIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  disabled: true,
};
DisabledWithIcon.argTypes = {
  ...DisabledWithIcon.argTypes,
  svgPath: { control: false },
};
DisabledWithIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når InlineButton har aria-describedby, så har button-element aria-describedby
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: elementId,
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaDescribedBy = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('aria-describedby')
    );
    expect(ariaDescribedBy).toBe(elementId);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
WithAccesskey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const accessKey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accessKey')
    );
    expect(accessKey).toBe(accessKeyValue);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
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
  children: { control: false },
};
WithOnBlur.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

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
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
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
  children: { control: false },
};
WithOnClick.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

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
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
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
  children: { control: false },
};
WithOnFocus.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

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
