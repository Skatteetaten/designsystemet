import { useState } from 'react';

import { AxePuppeteer } from '@axe-core/puppeteer';
import { IconButton, IconButtonProps } from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

const defaultSVGPath = Object.values(SystemSVGPaths)[14];
const alternativeSVGPath = Object.values(SystemSVGPaths)[40];

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

const availableSizes = [...sizeArr].slice(0, 4);
export default {
  component: IconButton,
  title: 'Tester/IconButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    isOutlined: { table: { disable: true } },
    size: {
      table: { disable: true },
      options: availableSizes,
      control: 'radio',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
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
} as ComponentMeta<typeof IconButton>;

const accessibleName = 'dummy tekst accessible name';

const defaultArgs: IconButtonProps = {
  svgPath: defaultSVGPath,
  title: accessibleName,
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div className={'noTransition'} data-test-block>
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

// Når IconButton har en id, så har button-elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'htmlid',
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
    expect(id).toBe('htmlid');
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
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når IconButton har en lang, så har button-element lang
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

// Når IconButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123bellsvgID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123bellsvgID');
  },
};

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 - 1 av 9, B1 - 1 av 2, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  svgPath: { table: { disable: false } },
  title: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const attributeType = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('type')
    );
    expect(attributeType).toBe('button');

    const titleElement = await page.$eval(
      `${wrapper} > button svg title`,
      (el) => el.textContent
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement).toContain(accessibleName);

    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.ariaHidden).toBe('false');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

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

// Når IconButton er outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const WithOutline = Template.bind({});
WithOutline.storyName = 'With Outline (A1 - 2 av 9)';
WithOutline.args = {
  ...defaultArgs,
  isOutlined: true,
};
WithOutline.argTypes = {
  ...WithOutline.argTypes,
  isOutlined: { table: { disable: false } },
};
WithOutline.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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
WithCustomSVGPath.storyName = 'With Custom SVGPath (A1 - 3 av 9)';
WithCustomSVGPath.args = {
  ...defaultArgs,
  svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />,
};
WithCustomSVGPath.argTypes = {
  ...WithCustomSVGPath.argTypes,
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};
WithCustomSVGPath.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når IconButton har size extraSmall, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeExtraSmall = Template.bind({});
WithSizeExtraSmall.storyName = 'With Size extraSmall (A1 - 4 av 9)';
WithSizeExtraSmall.args = {
  ...defaultArgs,
  size: 'extraSmall',
};
WithSizeExtraSmall.argTypes = {
  ...WithSizeExtraSmall.argTypes,
  size: { table: { disable: false } },
};
WithSizeExtraSmall.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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

// Når IconButton har size small, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeSmall = Template.bind({});
WithSizeSmall.storyName = 'With Size Small (A1 - 5 av 9)';
WithSizeSmall.args = {
  ...defaultArgs,
  size: 'small',
};
WithSizeSmall.argTypes = {
  ...WithSizeSmall.argTypes,
  size: { table: { disable: false } },
};
WithSizeSmall.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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
WithSizeLarge.storyName = 'With Size Large (A1 - 6 av 9)';
WithSizeLarge.args = {
  ...defaultArgs,
  size: 'large',
};
WithSizeLarge.argTypes = {
  ...WithSizeLarge.argTypes,
  size: { table: { disable: false } },
};
WithSizeLarge.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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

// Når IconButton har size extraSmall og er outlined, så vises en liten knapp med ramme som rendrer riktig i ulike tilstander
export const WithSizeExtraSmallAndOutline = Template.bind({});
WithSizeExtraSmallAndOutline.storyName =
  'With Size extraSmall and Outline (A1 - 7 av 9)';
WithSizeExtraSmallAndOutline.args = {
  ...defaultArgs,
  size: 'extraSmall',
  isOutlined: true,
};
WithSizeExtraSmallAndOutline.argTypes = {
  ...WithSizeExtraSmallAndOutline.argTypes,
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};
WithSizeExtraSmallAndOutline.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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
WithSizeSmallAndOutline.storyName = 'With Size Small and Outline (A1 - 8 av 9)';
WithSizeSmallAndOutline.args = {
  ...defaultArgs,
  size: 'small',
  isOutlined: true,
};
WithSizeSmallAndOutline.argTypes = {
  ...WithSizeSmallAndOutline.argTypes,
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};
WithSizeSmallAndOutline.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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
WithSizeLargeAndOutline.storyName = 'With Size Large and Outline (A1 - 9 av 9)';
WithSizeLargeAndOutline.args = {
  ...defaultArgs,
  size: 'large',
  isOutlined: true,
};
WithSizeLargeAndOutline.argTypes = {
  ...WithSizeLargeAndOutline.argTypes,
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};
WithSizeLargeAndOutline.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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

// Når IconButton er disabled og outlined, så vises knappen med ramme i disabled stil
export const DisabledWithOutline = Template.bind({});
DisabledWithOutline.storyName = 'Disabled With Outline (B5 - 2 av 2)';
DisabledWithOutline.args = {
  ...defaultArgs,
  isOutlined: true,
  disabled: true,
};
DisabledWithOutline.argTypes = {
  ...DisabledWithOutline.argTypes,
  isOutlined: { table: { disable: false } },
  disabled: { table: { disable: false } },
};
DisabledWithOutline.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();
  },
};

// Når IconButton har prop type, så har button-elementet type satt
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

// Når IconButton har aria-describedby, så har button-elementet aria-describedby satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B3)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'araiDescId',
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
    expect(ariaDescribedby).toBe('araiDescId');
  },
};

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With AccessKey (B4)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 'a',
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
    expect(accessKey).toBe('a');
  },
};

// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer ikonet på knappen.
const OnBlurTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div className={'noTransition'} data-test-block>
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
  },
};

// Når brukeren klikker på knappen, så kalles funksjonen i onClick prop.
// onClick-event endrer ikonet på knappen.
const OnClickTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div className={'noTransition'} data-test-block>
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
  },
};

// Når brukeren setter focus på knappen, så kalles funksjonen i onFocus prop.
// onFocus-event endrer ikonet på knappen.
const OnFocusTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div className={'noTransition'} data-test-block>
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
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();
  },
};
