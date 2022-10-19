import { IconButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';

// TODO test onClick, onBlur and onFocus

const wrapper = '[data-test-block]';
const defaultSVGPath = Object.values(SystemSVGPaths)[14];
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: IconButton,
  title: 'Tests / IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const IconButtonDefaults = Template.bind({});
IconButtonDefaults.args = {
  svgPath: defaultSVGPath,
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton har size small, så vises en liten knapp som rendrer riktig i ulike tilstander
export const IconButtonSmall = Template.bind({});
IconButtonSmall.args = {
  svgPath: defaultSVGPath,
  size: 'small',
};
IconButtonSmall.parameters = {
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton har size large, så vises en stor knapp som rendrer riktig i ulike tilstander
export const IconButtonLarge = Template.bind({});
IconButtonLarge.args = {
  svgPath: defaultSVGPath,
  size: 'large',
};
IconButtonLarge.parameters = {
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton er outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const IconButtonWithOutline = Template.bind({});
IconButtonWithOutline.args = {
  svgPath: defaultSVGPath,
  isOutlined: true,
};
IconButtonWithOutline.parameters = {
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton har size small og er outlined, så vises en liten knapp med ramme som rendrer riktig i ulike tilstander
export const IconButtonSmallWithOutline = Template.bind({});
IconButtonSmallWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  isOutlined: true,
};
IconButtonSmallWithOutline.parameters = {
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton har size large og er outlined, så vises en stor knapp med ramme som rendrer riktig i ulike tilstander
export const IconButtonLargeWithOutline = Template.bind({});
IconButtonLargeWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  isOutlined: true,
};
IconButtonLargeWithOutline.parameters = {
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
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await iconButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når IconButton er disabled, så vises knappen i disabled stil
export const IconButtonDisabled = Template.bind({});
IconButtonDisabled.args = {
  svgPath: defaultSVGPath,
  disabled: true,
};
IconButtonDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har size small og er disabled, så vises en liten knapp i disabled stil
export const IconButtonSmallAndDisabled = Template.bind({});
IconButtonSmallAndDisabled.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  disabled: true,
};
IconButtonSmallAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har size large og er disabled, så vises en stor knapp i disabled stil
export const IconButtonLargeAndDisabled = Template.bind({});
IconButtonLargeAndDisabled.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  disabled: true,
};
IconButtonLargeAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er disabled og outlined, så vises knappen i disabled stil med ramme
export const IconButtonDisabledWithOutline = Template.bind({});
IconButtonDisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  isOutlined: true,
  disabled: true,
};
IconButtonDisabledWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er small og disabled og outlined, så vises en liten knapp i disabled stil med ramme
export const IconButtonSmallDisabledWithOutline = Template.bind({});
IconButtonSmallDisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  isOutlined: true,
  disabled: true,
};
IconButtonSmallDisabledWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er large og disabled og outlined, så vises en stor knapp i disabled stil med ramme
export const IconButtonLargeDisabledWithOutline = Template.bind({});
IconButtonLargeDisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  isOutlined: true,
  disabled: true,
};
IconButtonLargeDisabledWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har et custom ikon, så vises dette ikonet
export const IconButtonWithCustomSVGPath = Template.bind({});
IconButtonWithCustomSVGPath.args = {
  svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'}/>
};
IconButtonWithCustomSVGPath.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har en custom CSS, så vises custom stil
export const IconButtonWithCustomCss = Template.bind({});
IconButtonWithCustomCss.args = {
  svgPath: defaultSVGPath,
  className: 'buttonClassnameDark',
};
IconButtonWithCustomCss.argTypes = {
  className: {
    control: 'select',
    options: ['', 'buttonClassnameDark', 'buttonClassnameGreen'],
  },
};
IconButtonWithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameDark');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra custom CSS
export const IconButtonWithCustomCssAndDisabled = Template.bind({});
IconButtonWithCustomCssAndDisabled.args = {
  svgPath: defaultSVGPath,
  disabled: true,
  className: 'buttonClassnameDark',
};
IconButtonWithCustomCssAndDisabled.argTypes = {
  ...IconButtonWithCustomCssAndDisabled.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameDark', 'buttonClassnameGreen'],
  },
};
IconButtonWithCustomCssAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameDark');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har aria attributer, så har button-elementet aria-* satt
export const IconButtonWithArias = Template.bind({});
IconButtonWithArias.args = {
  svgPath: defaultSVGPath,
  ariaLabel: 'Knapp ariaLabel',
  ariaDescribedBy: 'Knapp ariaDescribedBy',
};
IconButtonWithArias.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaLabel: el.getAttribute('aria-label'),
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaLabel).toBe('Knapp ariaLabel');
    expect(ariaAttributes.ariaDescribedBy).toBe('Knapp ariaDescribedBy');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har en tabIndex, så har button-elementet tabIndex satt
export const IconButtonWithTabindex = Template.bind({});
IconButtonWithTabindex.args = {
  svgPath: defaultSVGPath,
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

// Når IconButton har en id, så har button-elementet id'en satt
export const IconButtonWithId = Template.bind({});
IconButtonWithId.args = {
  svgPath: defaultSVGPath,
  id: '123',
};
IconButtonWithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('123');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const IconButtonWithAccessKey = Template.bind({});
IconButtonWithAccessKey.args = {
  svgPath: defaultSVGPath,
  accessKey: 'The bell is ringing',
};
IconButtonWithAccessKey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const accessKey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accessKey')
    );
    expect(accessKey).toBe('The bell is ringing');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har dataTestId, så har button-elementet data-testid satt
export const IconButtonWithDataTestId = Template.bind({});
IconButtonWithDataTestId.args = {
  svgPath: defaultSVGPath,
  "data-testid": '123 bell svg',
};
IconButtonWithDataTestId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestId = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestId).toBe('123 bell svg');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
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
  svgPath: defaultSVGPath,
};
IconButtonWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};
