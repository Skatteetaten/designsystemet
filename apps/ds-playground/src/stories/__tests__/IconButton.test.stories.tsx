import { useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';

const wrapper = '[data-test-block]';
const defaultSVGPath = Object.values(SystemSVGPaths)[14];
const alternativeSVGPath = Object.values(SystemSVGPaths)[40];
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: IconButton,
  title: 'Tests / IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTranstion'} data-test-block>
    <IconButton {...args} />
  </div>
);

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const IconButtonDefaults = Template.bind({});
IconButtonDefaults.args = {
  svgPath: defaultSVGPath,
  ariaLabel: 'dummy tekst aria-label',
};
IconButtonDefaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};
// Når IconButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.args = {
  ...IconButtonDefaults.args,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
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
  ...IconButtonDefaults.args,
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

// Når IconButton har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.args = {
  ...IconButtonDefaults.args,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
  },
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

// Når IconButton har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra custom CSS
export const WithCustomCssAndDisabled = Template.bind({});
WithCustomCssAndDisabled.args = {
  ...IconButtonDefaults.args,
  disabled: true,
  className: 'dummyClassname',
};
WithCustomCssAndDisabled.argTypes = {
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
  },
};
WithCustomCssAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.args = {
  ...IconButtonDefaults.args,
  'data-testid': '123bellsvgID',
};
WithDataTestid.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123bellsvgID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har size small, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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

// Når IconButton er outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const WithOutline = Template.bind({});
WithOutline.args = {
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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
  ...IconButtonDefaults.args,
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

// Når IconButton er disabled og outlined, så vises knappen med ramme i disabled stil
export const DisabledWithOutline = Template.bind({});
DisabledWithOutline.args = {
  ...IconButtonDefaults.args,
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

// Når IconButton har aria attributer, så har button-elementet aria-* satt
export const WithArias = Template.bind({});
WithArias.args = {
  ...IconButtonDefaults.args,
  ariaLabel: 'Knapp ariaLabel',
  ariaDescribedBy: 'araiDescId',
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
    expect(ariaAttributes.ariaDescribedBy).toBe('araiDescId');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const WithAccessKey = Template.bind({});
WithAccessKey.args = {
  ...IconButtonDefaults.args,
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

/*

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTranstion'} data-test-block>
    <IconButton {...args} />
  </div>
);

*/

// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer teksten på knappen.
const OnBlurTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <IconButton
        {...args}
        svgPath={svgPath}
        onBlur={(): void => setSvgPath(alternativeSVGPath)}
      />
    </div>
  );
};
export const WithOnBlur = OnBlurTemplate.bind({});
WithOnBlur.args = {
  ariaLabel: 'Knapp test av onBlur',
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
  },
};

// Når brukeren klikker på knappen, så kalles funksjonen i onClick prop.
// onClick-event endrer teksten på knappen.
const OnClickTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <IconButton
        {...args}
        svgPath={svgPath}
        onClick={(): void => setSvgPath(alternativeSVGPath)}
      />
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnBlur.args = {
  ariaLabel: 'Knapp test av onClick',
};
WithOnClick.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    await buttonElement?.click();
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();
  },
};

// Når brukeren setter focus på knappen, så kalles funksjonen i onFocus prop.
// onFocus-event endrer teksten på knappen.
const OnFocusTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <IconButton
        {...args}
        svgPath={svgPath}
        onFocus={(): void => setSvgPath(alternativeSVGPath)}
      />
    </div>
  );
};
export const WithOnFocus = OnFocusTemplate.bind({});
WithOnFocus.args = {
  ariaLabel: 'Knapp test av onFocus',
};
WithOnFocus.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttonElement = await page.$(`${wrapper} > button`);
    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    await buttonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();
  },
};
