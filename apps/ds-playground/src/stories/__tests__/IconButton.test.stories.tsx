import { useState } from 'react';
import { IconButton } from '@skatteetaten/ds-buttons';
import { SendSVGpath, SystemSVGPathsAndIcons } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};
const wrapper = '[data-test-block]';
const ariaLabel = 'aria-label';
const ariaLabelledby = 'aria-labelledby';
const ariaHidden = 'aria-hidden';

export default {
  component: IconButton,
  title: 'Tests / IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ margin: '1rem' }} data-test-block>
    <IconButton {...args} />
  </div>
);

const waitForTransitionEnd = async (
  element: string,
  page: ElementHandle
): Promise<void> => {
  await page.evaluate((element) => {
    return new Promise<void>((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const transition = document.querySelector(element);
      const onEnd = function (): void {
        transition?.removeEventListener('transitionend', onEnd);
        resolve();
      };
      transition?.addEventListener('transitionend', onEnd);
    });
  }, element);
};

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const IconButtonDefaults = Template.bind({});
IconButtonDefaults.args = {
  buttonSize: 'medium',
  isOutlined: false,
  disabled: false,
};
IconButtonDefaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();

    const iconButtonElement = await page.$(`${wrapper} > button`);
    await iconButtonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());

    await iconButtonElement?.hover();
    await waitForTransitionEnd(`${wrapper} > button`, page);
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton har en ref, så får dom button elementet ref forwarded
export const IconButtonWithRef = Template.bind({});
IconButtonWithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
IconButtonWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har et ikon, så vises ikonet
export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {
  ...IconButtonDefaults.args,
};
IconButtonWithIcon.parameters = {
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
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.viewBox).toBe('0 0 24 24');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton is outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const IconButtonWithOutline = Template.bind({});
IconButtonWithOutline.args = {
  ...IconButtonDefaults.args,
  isOutlined: true,
};
IconButtonWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    expect(buttonElement).toMatchSnapshot();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

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

// Når IconButton er disabled, så vises knappen i disabled stil
export const Disabled = Template.bind({});
Disabled.args = {
  ...IconButtonDefaults.args,
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

// Når IconButton har et ikon og er disabled, så vises ikonet og knappen er disabled
export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.args = {
  ...IconButtonDefaults.args,
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

// Når IconButton har en custom CSS, så vises custom stil
export const ClassNameChange = Template.bind({});
ClassNameChange.args = {
  ...IconButtonDefaults.args,
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

// Når IconButton har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra custom CSS
export const CustomCssAndDisabled = Template.bind({});
CustomCssAndDisabled.args = {
  ...IconButtonDefaults.args,
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

// Når IconButton har aria attributer, så har button element aria-* satt
export const IconButtonWithArias = Template.bind({});
IconButtonWithArias.args = {
  ...IconButtonDefaults.args,
  'aria-hidden': true,
  'aria-label': 'Knapp aria-label',
  'aria-describedby': 'Knapp aria-describedby',
};
IconButtonWithArias.parameters = {
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

// Når IconButton har en tabIndex, så har button-elementet tabIndex
export const IconButtonWithTabindex = Template.bind({});
IconButtonWithTabindex.args = {
  ...IconButtonDefaults.args,
  tabIndex: -1,
};
IconButtonWithTabindex.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const tabIndex = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('tabIndex')
    );
    expect(tabIndex).toBe('-1');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};
