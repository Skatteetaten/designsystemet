import { useState } from 'react';

import { IconButton, IconButtonProps } from '@skatteetaten/ds-buttons';
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

const accessibleName = 'dummy tekst accessible name';

const defaultArgs: IconButtonProps = {
  svgPath: defaultSVGPath,
  title: accessibleName,
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTranstion'} data-test-block>
    <IconButton {...args} title={args.title} />
  </div>
);

// Når IconButton har en ref, så får dom button elementet ref forwarded
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
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
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
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
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

// Når IconButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA4)';
WithDataTestid.args = {
  ...defaultArgs,
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

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Without Outline (A1 - 1 av 7, B1, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    const titleElement = await page.$eval(
      `${wrapper} > button svg title`,
      (el) => el.textContent
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement).toContain(accessibleName);

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
    expect(svgAttributes.ariaLabelledBy).toBe('svgtitle-:r0:');
    expect(svgAttributes.ariaHidden).toBe('false');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når IconButton er outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const WithOutline = Template.bind({});
WithOutline.storyName = 'With Outline (A1 - 2 av 7)';
WithOutline.args = {
  ...defaultArgs,
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

// Når IconButton har et custom ikon, så vises dette ikonet
export const WithCustomSVGPath = Template.bind({});
WithCustomSVGPath.storyName = 'With Custom SVGPath (A1 - 3 av 7)';
WithCustomSVGPath.args = {
  ...defaultArgs,
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

// Når IconButton har size small, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeSmall = Template.bind({});
WithSizeSmall.storyName = 'With Size Small (A1 - 4 av 7)';
WithSizeSmall.args = {
  ...defaultArgs,
  size: 'small',
};
WithSizeSmall.parameters = {
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
export const WithSizeLarge = Template.bind({});
WithSizeLarge.storyName = 'With Size Large (A1 - 5 av 7)';
WithSizeLarge.args = {
  ...defaultArgs,
  size: 'large',
};
WithSizeLarge.parameters = {
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
export const WithSizeSmallAndOutline = Template.bind({});
WithSizeSmallAndOutline.storyName = 'With Size Small and Outline (A1 - 6 av 7)';
WithSizeSmallAndOutline.args = {
  ...defaultArgs,
  size: 'small',
  isOutlined: true,
};
WithSizeSmallAndOutline.parameters = {
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
export const WithSizeLargeAndOutline = Template.bind({});
WithSizeLargeAndOutline.storyName = 'With Size Large and Outline (A1 - 7 av 7)';
WithSizeLargeAndOutline.args = {
  ...defaultArgs,
  size: 'large',
  isOutlined: true,
};
WithSizeLargeAndOutline.parameters = {
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

// Når IconButton er disabled og outlined, så vises knappen med ramme i disabled stil
export const DisabledWithOutline = Template.bind({});
DisabledWithOutline.storyName = 'Disabled With Outline (B5 - 2 av 2)';
DisabledWithOutline.args = {
  ...defaultArgs,
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

// Når IconButton har aria-describedby, så har button-elementet aria-describedby satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B3)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedBy: 'araiDescId',
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaDescribedBy = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('aria-describedby')
    );
    expect(ariaDescribedBy).toBe('araiDescId');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With AccessKey (B4)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 'a',
};
WithAccesskey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const accessKey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accessKey')
    );
    expect(accessKey).toBe('a');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer ikonet på knappen.
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
WithOnBlur.storyName = 'With onBlur (A2 delvis)';
WithOnBlur.args = {
  ...defaultArgs,
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
// onClick-event endrer ikonet på knappen.
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
WithOnClick.storyName = 'With onClick (A2 delvis)';
WithOnClick.args = {
  ...defaultArgs,
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
// onFocus-event endrer ikonet på knappen.
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
WithOnFocus.storyName = 'With onFocus (A2 delvis)';
WithOnFocus.args = {
  ...defaultArgs,
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
