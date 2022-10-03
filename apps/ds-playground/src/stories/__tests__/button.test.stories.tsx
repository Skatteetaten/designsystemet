import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { AccountChildSVGpath } from '@skatteetaten/ds-icons';
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
    <Button {...args} variant={args.variant} icon={args.icon}>
      {args.children}
    </Button>
  </div>
);

// Når Button instansieres, får den default variant primary
export const ButtonDefaults = Template.bind({});
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
export const ButtonWithRef = Template.bind({});
ButtonWithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
  children: defaultButtonText,
};
ButtonWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Button har en variant, så vises stilsett for varianten (secondary)
export const ButtonWithVariantSecondary = Template.bind({});
ButtonWithVariantSecondary.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
};
ButtonWithVariantSecondary.parameters = {
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
export const ButtonWithVariantTertiary = Template.bind({});
ButtonWithVariantTertiary.args = {
  ...ButtonDefaults.args,
  variant: 'tertiary',
};
ButtonWithVariantTertiary.parameters = {
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
export const ButtonWithVariantDanger = Template.bind({});
ButtonWithVariantDanger.args = { ...ButtonDefaults.args, variant: 'danger' };
ButtonWithVariantDanger.parameters = {
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
export const ButtonWithChildren = Template.bind({});
ButtonWithChildren.args = { children: 'Button with children' };
ButtonWithChildren.parameters = {
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
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  ...ButtonDefaults.args,
  icon: {
    svgPath: AccountChildSVGpath,
    'aria-label': 'min custom aria-label beskrivelse',
  },
};
ButtonWithIcon.argTypes = {
  ...ButtonWithIcon.argTypes,
  icon: { control: false },
};
ButtonWithIcon.parameters = {
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
    expect(svgAttributes.ariaHidden).toBe('false');
    expect(svgAttributes.ariaLabel).toBe('min custom aria-label beskrivelse');
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  ...ButtonDefaults.args,
  disabled: true,
};
ButtonDisabled.parameters = {
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
export const ButtonDisabledWithIcon = Template.bind({});
ButtonDisabledWithIcon.args = {
  ...ButtonDefaults.args,
  icon: { svgPath: AccountChildSVGpath },
  disabled: true,
};
ButtonDisabledWithIcon.argTypes = {
  ...ButtonDisabledWithIcon.argTypes,
  icon: { control: false },
};
ButtonDisabledWithIcon.parameters = {
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
export const ButtonClassNameChange = Template.bind({});
ButtonClassNameChange.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
  className: 'buttonClassnameGreen',
};
ButtonClassNameChange.argTypes = {
  ...ButtonClassNameChange.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameGreen', 'buttonClassnameBlue'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
  variant: { control: false },
};
ButtonClassNameChange.parameters = {
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
export const ButtonCustomCssAndDisabled = Template.bind({});
ButtonCustomCssAndDisabled.args = {
  ...ButtonDefaults.args,
  disabled: true,
  className: 'buttonClassnameGreen',
};
ButtonCustomCssAndDisabled.argTypes = {
  ...ButtonCustomCssAndDisabled.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameGreen', 'buttonClassnameBlue'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
ButtonCustomCssAndDisabled.parameters = {
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
export const ButtonWithArias = Template.bind({});
ButtonWithArias.args = {
  ...ButtonDefaults.args,
  'aria-hidden': true,
  'aria-label': 'Knapp aria-label',
  'aria-describedby': 'Knapp aria-describedby',
};
ButtonWithArias.parameters = {
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
export const ButtonWithTabindex = Template.bind({});
ButtonWithTabindex.args = {
  ...ButtonDefaults.args,
  tabIndex: -1,
};
ButtonWithTabindex.parameters = {
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
export const ButtonWithLongTextAndIcon = Template.bind({});
ButtonWithLongTextAndIcon.args = {
  ...ButtonDefaults.args,
  icon: { svgPath: AccountChildSVGpath },
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
};
ButtonWithLongTextAndIcon.argTypes = {
  ...ButtonWithLongTextAndIcon.argTypes,
  icon: { control: false },
};
ButtonWithLongTextAndIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Button har en veldig lang tekst så skal tekst venstrejusteres
export const ButtonWithLongText = Template.bind({});
ButtonWithLongText.args = {
  ...ButtonDefaults.args,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles',
};
ButtonWithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Testing onClick på knapp. onClick-event endrer teksten på knappen
const OnClickTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttText, setButtText] = useState('Initiell knappetekst');
  return (
    <div style={{ margin: '1em' }} data-test-block>
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
export const ButtonOnClick = OnClickTemplate.bind({});
ButtonOnClick.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
};
ButtonOnClick.parameters = {
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
