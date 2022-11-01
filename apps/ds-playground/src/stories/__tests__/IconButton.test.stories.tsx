import { IconButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';

// TODO FRONT-955 test onClick, onBlur and onFocus

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
  <div style={{ margin: '1em' }} data-test-block>
    <IconButton {...args} />
  </div>
);

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.args = {
  svgPath: defaultSVGPath,
};
Defaults.parameters = {
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
// Når IconButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
  svgPath: defaultSVGPath,
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har en id, så har button-elementet id'en satt
export const WithId = Template.bind({});
WithId.args = {
  svgPath: defaultSVGPath,
  id: '123',
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('123');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har size small, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const SizeSmall = Template.bind({});
SizeSmall.args = {
  svgPath: defaultSVGPath,
  size: 'small',
};
SizeSmall.parameters = {
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

// Når IconButton har size large, så vises en stor knapp uten ramme som rendrer riktig i ulike tilstander
export const SizeLarge = Template.bind({});
SizeLarge.args = {
  svgPath: defaultSVGPath,
  size: 'large',
};
SizeLarge.parameters = {
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
export const WithOutline = Template.bind({});
WithOutline.args = {
  svgPath: defaultSVGPath,
  isOutlined: true,
};
WithOutline.parameters = {
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
export const SmallWithOutline = Template.bind({});
SmallWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  isOutlined: true,
};
SmallWithOutline.parameters = {
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
export const LargeWithOutline = Template.bind({});
LargeWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  isOutlined: true,
};
LargeWithOutline.parameters = {
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

// Når IconButton er disabled, så vises knappen uten ramme i disabled stil
export const Disabled = Template.bind({});
Disabled.args = {
  svgPath: defaultSVGPath,
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

// Når IconButton er disabled og outlined, så vises knappen med ramme i disabled stil
export const DisabledWithOutline = Template.bind({});
DisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  isOutlined: true,
  disabled: true,
};
DisabledWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har size small og er disabled, så vises en liten knapp uten ramme i disabled stil
export const SizeSmallAndDisabled = Template.bind({});
SizeSmallAndDisabled.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  disabled: true,
};
SizeSmallAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har size large og er disabled, så vises en stor knapp uten ramme i disabled stil
export const SizeLargeAndDisabled = Template.bind({});
SizeLargeAndDisabled.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  disabled: true,
};
SizeLargeAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er small og disabled og outlined, så vises en liten knapp med ramme i disabled stil
export const SizeSmallDisabledWithOutline = Template.bind({});
SizeSmallDisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'small',
  isOutlined: true,
  disabled: true,
};
SizeSmallDisabledWithOutline.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er large og disabled og outlined, så vises en stor knapp med ramme i disabled stil
export const SizeLargeDisabledWithOutline = Template.bind({});
SizeLargeDisabledWithOutline.args = {
  svgPath: defaultSVGPath,
  size: 'large',
  isOutlined: true,
  disabled: true,
};
SizeLargeDisabledWithOutline.parameters = {
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
export const WithCustomSVGPath = Template.bind({});
WithCustomSVGPath.args = {
  svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />,
};
WithCustomSVGPath.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.args = {
  svgPath: defaultSVGPath,
  className: 'buttonClassnameDark',
};
WithCustomCss.argTypes = {
  className: {
    control: 'select',
    options: ['', 'buttonClassnameDark', 'buttonClassnameGreen'],
  },
};
WithCustomCss.parameters = {
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
export const WithCustomCssAndDisabled = Template.bind({});
WithCustomCssAndDisabled.args = {
  svgPath: defaultSVGPath,
  disabled: true,
  className: 'buttonClassnameDark',
};
WithCustomCssAndDisabled.argTypes = {
  className: {
    control: 'select',
    options: ['', 'buttonClassnameDark', 'buttonClassnameGreen'],
  },
};
WithCustomCssAndDisabled.parameters = {
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
export const WithArias = Template.bind({});
WithArias.args = {
  svgPath: defaultSVGPath,
  ariaLabel: 'Knapp ariaLabel',
  ariaDescribedBy: 'Knapp ariaDescribedBy',
};
WithArias.parameters = {
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

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const WithAccessKey = Template.bind({});
WithAccessKey.args = {
  svgPath: defaultSVGPath,
  accessKey: 'The bell is ringing',
};
WithAccessKey.parameters = {
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
export const WithDataTestId = Template.bind({});
WithDataTestId.args = {
  svgPath: defaultSVGPath,
  'data-testid': '123 bell svg',
};
WithDataTestId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestId = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestId).toBe('123 bell svg');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};
