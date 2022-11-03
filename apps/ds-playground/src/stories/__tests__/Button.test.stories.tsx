import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { SendSVGpath } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

const wrapper = '[data-test-block]';
const defaultButtonText = 'Klikk her';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: Button,
  title: 'Tests / Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: '1em' }} className={'noTranstion'} data-test-block>
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
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
  children: defaultButtonText,
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button har en id, så har button-element id
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'htmlid',
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const elementid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(elementid).toBe('htmlid');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
    control: 'select',
  },
  variant: { control: false },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA4)';
WithDataTestid.args = {
  svgPath: SendSVGpath,
  'data-testid': '123ID',
};
WithDataTestid.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123ID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button instansieres, får den default variant primary.
// Knapp må også ha tekst/children
export const ButtonDefaults = Template.bind({});
ButtonDefaults.storyName = 'Defaults Variant Primary (B1 og A1 - 1 av 4)';
ButtonDefaults.args = {
  children: defaultButtonText,
};
ButtonDefaults.parameters = {
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

// Når Button har en variant, så vises stilsett for varianten (secondary)
export const VariantSecondary = Template.bind({});
VariantSecondary.storyName = 'Variant Secondary (A1 - 2 av 4)';
VariantSecondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};
VariantSecondary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    expect(buttonElement).toMatchSnapshot();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

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
VariantTertiary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    expect(buttonElement).toMatchSnapshot();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());

    await buttonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await buttonElement?.click();
    await page.waitForSelector(`${wrapper} > button`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når Button har en variant, så vises stilsett for varianten (danger)
export const VariantDanger = Template.bind({});
VariantDanger.storyName = 'Variant Danger (A1 - 4 av 4)';
VariantDanger.args = { ...defaultArgs, variant: 'danger' };
VariantDanger.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    expect(buttonElement).toMatchSnapshot();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

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
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// TODO FRONT-971 diskusjon om text akseptansekriterier bør flyttes utenfor A1
// Når Button har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 delvis)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles',
};
WithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text Breaking (A1 delvis)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Herharviikkeikonsådaskaltekstenmidtstilles',
};
WithLongTextBreaking.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en veldig lang tekst og det er et ikon så skal tekst venstrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A1 delvis)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  svgPath: { control: false },
};
WithLongTextAndIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har ett ikon, så vises ikonet. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3 og B3)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
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

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har prop disabled, så er knapp disabled og stil er satt til disabled
export const Disabled = Template.bind({});
Disabled.storyName = 'Disabled (B5 - 1 av 2)';
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

// Når Button har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.storyName = 'DisabledWith Icon (B5 - 2 av 2)';
DisabledWithIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
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

// Når Button har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'id1',
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaDescribedBy).toBe('id1');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button har satt accessKey, så har accessKey en verdi
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With AccessKey (B3)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 's',
};
WithAccesskey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const accesskey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accesskey')
    );
    expect(accesskey).toBe('s');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
  children: { control: false },
  variant: { control: false },
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
WithOnClick.storyName = 'With onClick (A4)';
WithOnClick.args = {
  ...defaultArgs,
};
WithOnClick.argTypes = {
  ...WithOnClick.argTypes,
  children: { control: false },
  variant: { control: false },
};
WithOnClick.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

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
  children: { control: false },
  variant: { control: false },
};
WithOnFocus.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp har fått fokus');
  },
};
