import { useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import '../classnames.stories.css';

// TODO FRONT-893 legge til snapshot når det fungerer for linux

const wrapper = '[data-test-block]';
const defaultText = 'Legg til rapport';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: InlineButton,
  title: 'Tests / InlineButton',
} as ComponentMeta<typeof InlineButton>;

const Template: ComponentStory<typeof InlineButton> = (args) => (
  <div data-test-block>
    <InlineButton {...args} svgPath={args.svgPath}>
      {args.children}
    </InlineButton>
  </div>
);

export const InlineButtonDefaults = Template.bind({});
InlineButtonDefaults.storyName = 'Defaults';
InlineButtonDefaults.args = {
  children: defaultText,
};
InlineButtonDefaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    const buttonElement = await page.$(`${wrapper} > button`);
    const textContent = await buttonElement?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultText);

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

const forwardedFromRefId = 'dummyId';
export const WithRef = Template.bind({});
WithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = forwardedFromRefId;
    }
  },
  children: defaultText,
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe(forwardedFromRefId);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

const elementId = 'dummyId';
export const WithId = Template.bind({});
WithId.args = {
  ...InlineButtonDefaults.args,
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

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  ...InlineButtonDefaults.args,
  svgPath: AddOutlineSVGpath,
};
WithIconLeft.argTypes = {
  ...WithIconLeft.argTypes,
  svgPath: { control: false },
};
WithIconLeft.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        role: el.getAttribute('role'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.role).toBe('img');
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  ...InlineButtonDefaults.args,
  svgPath: AddOutlineSVGpath,
  iconPosition: 'right',
};
WithIconRight.argTypes = {
  ...WithIconRight.argTypes,
  svgPath: { control: false },
};
WithIconRight.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const systemIconViewBox = '0 0 24 24';
    const svgAttributes = await page.$eval(`${wrapper} > button svg`, (el) => {
      return {
        role: el.getAttribute('role'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.role).toBe('img');
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...InlineButtonDefaults.args,
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

export const DisabledWithIcon = Template.bind({});
DisabledWithIcon.args = {
  ...InlineButtonDefaults.args,
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

const dummyClassName = 'dummyClassName';
export const withClassName = Template.bind({});
withClassName.args = {
  ...InlineButtonDefaults.args,
  className: dummyClassName,
};
withClassName.argTypes = {
  ...withClassName.argTypes,
  className: {
    control: 'select',
    options: [' ', dummyClassName],
    table: { defaultValue: { summary: '' } },
  },
};
withClassName.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain(dummyClassName);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const WithClassNameAndDisabled = Template.bind({});
WithClassNameAndDisabled.args = {
  ...InlineButtonDefaults.args,
  disabled: true,
  className: dummyClassName,
};
WithClassNameAndDisabled.argTypes = {
  ...WithClassNameAndDisabled.argTypes,
  className: {
    control: 'select',
    options: [' ', dummyClassName],
    table: { defaultValue: { summary: '' } },
  },
};
WithClassNameAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain(dummyClassName);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.args = {
  ...InlineButtonDefaults.args,
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

const accessKeyValue = 'a';
export const WithAccessKey = Template.bind({});
WithAccessKey.args = {
  ...InlineButtonDefaults.args,
  accessKey: accessKeyValue,
};
WithAccessKey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const accessKey = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('accessKey')
    );
    expect(accessKey).toBe(accessKeyValue);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

export const WithTabindex = Template.bind({});
WithTabindex.args = {
  ...InlineButtonDefaults.args,
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

export const WithLongText = Template.bind({});
WithLongText.args = {
  ...InlineButtonDefaults.args,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Når ikke ikon så skal teksten være venstrejusteres.',
};
WithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.args = {
  ...InlineButtonDefaults.args,
  svgPath: AddOutlineSVGpath,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres for ikon med posisjon left.',
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

const knappeText = 'Ny tekst på knapp slik at vi ser at event fungerte';
// Egen template for å kunne bruke useState som lar oss synliggjøre resultatet av en onClick event
const OnClickTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste at onClick virker'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <InlineButton {...args} onClick={(): void => setButtText(knappeText)}>
        {buttText}
      </InlineButton>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.args = {
  ...InlineButtonDefaults.args,
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
    expect(text).toBe(knappeText);
  },
};

// TODO FRONT-893 - test onBlur - vet ikke hvordan siden elementHandler ikke har blur()

// Egen template for å kunne bruke useState som lar oss synliggjøre resultatet av en onFocus event
const OnFocusTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Gi knapp fokus for å teste at onFocus virker'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <InlineButton {...args} onFocus={(): void => setButtText(knappeText)}>
        {buttText}
      </InlineButton>
    </div>
  );
};
export const WithOnFocus = OnFocusTemplate.bind({});
WithOnFocus.args = {
  ...InlineButtonDefaults.args,
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
    expect(text).toBe(knappeText);
  },
};
