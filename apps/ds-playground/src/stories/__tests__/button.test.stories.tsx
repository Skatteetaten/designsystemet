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

/* eslint-disable jest/no-standalone-expect */
export default {
  component: Button,
  title: 'Tests / Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: '1em' }} data-test-block>
    <Button {...args} variant={args.variant} iconProps={args.iconProps}>
      {args.children}
    </Button>
  </div>
);

// Når Button instansieres, får den default variant primary
export const ButtonDefaults = Template.bind({});
ButtonDefaults.storyName = 'Defaults';
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

// Når Button har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
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

// Når Button har en variant, så vises stilsett for varianten (secondary)
export const VariantSecondary = Template.bind({});
VariantSecondary.args = {
  ...ButtonDefaults.args,
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
VariantTertiary.args = {
  ...ButtonDefaults.args,
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
VariantDanger.args = { ...ButtonDefaults.args, variant: 'danger' };
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

// Når Button har en tekst, så vises teksten
export const WithChildren = Template.bind({});
WithChildren.args = { children: 'Button with children' };
WithChildren.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const element = await page.$(wrapper);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Button with children');

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har ett ikon, så vises ikonet. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...ButtonDefaults.args,
  iconProps: {
    svgPath: SendSVGpath,
    'aria-label': 'min custom aria-label beskrivelse',
  },
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  iconProps: { control: false },
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
    // TODO Alternativt gjeninnføre tester etter avklaring rundt aria-attributter for icon i knapp
    expect(svgAttributes.role).toBe('img');
    // expect(svgAttributes.ariaHidden).toBe('false');
    // expect(svgAttributes.ariaLabel).toBe('min custom aria-label beskrivelse');
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...ButtonDefaults.args,
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

// Når Button har et ikon og er disabled, så vises iconet og knapp er disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.args = {
  ...ButtonDefaults.args,
  iconProps: { svgPath: SendSVGpath },
  disabled: true,
};
DisabledWithIcon.argTypes = {
  ...DisabledWithIcon.argTypes,
  iconProps: { control: false },
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

// Når Button har en custom CSS, så vises custom stil
export const ClassNameChange = Template.bind({});
ClassNameChange.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
  className: 'buttonClassnameGreen',
};
ClassNameChange.argTypes = {
  ...ClassNameChange.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameGreen', 'buttonClassnameBlue'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
  variant: { control: false },
};
ClassNameChange.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameGreen');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra customCSS
export const CustomCssAndDisabled = Template.bind({});
CustomCssAndDisabled.args = {
  ...ButtonDefaults.args,
  disabled: true,
  className: 'buttonClassnameGreen',
};
CustomCssAndDisabled.argTypes = {
  ...CustomCssAndDisabled.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameGreen', 'buttonClassnameBlue'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
CustomCssAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameGreen');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har aria attributer, så har button element aria-* satt
export const WithArias = Template.bind({});
WithArias.args = {
  ...ButtonDefaults.args,
  'aria-hidden': true,
  'aria-label': 'Knapp aria-label',
  'aria-describedby': 'Knapp aria-describedby',
};
WithArias.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaHidden: el.getAttribute('aria-hidden'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaHidden).toBe('true');
    expect(ariaAttributes.ariaLabel).toBe('Knapp aria-label');
    expect(ariaAttributes.ariaDescribedBy).toBe('Knapp aria-describedby');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button har en tabIndex, så har button-element tabIndex
export const WithTabindex = Template.bind({});
WithTabindex.args = {
  ...ButtonDefaults.args,
  tabIndex: -1,
};
WithTabindex.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const tabIndex = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('tabIndex')
    );
    expect(tabIndex).toBe('-1');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button har en veldig lang tekst og det er et ikon så skal tekst venstrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.args = {
  ...ButtonDefaults.args,
  iconProps: { svgPath: SendSVGpath },
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  iconProps: { control: false },
};
WithLongTextAndIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.args = {
  ...ButtonDefaults.args,
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

// Testing onClick på knapp. onClick-event endrer teksten på knappen.
// Egen template for å kunne bruke useState som lar oss synliggjøre resultatet av en event
const OnClickTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onClick event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <Button
        {...args}
        variant={args.variant}
        onClick={(): void => setButtText('Endret Tekst på Knapp')}
      >
        {buttText}
      </Button>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
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

    await page.waitForSelector(`${wrapper} > button`);
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Endret Tekst på Knapp');
  },
};
