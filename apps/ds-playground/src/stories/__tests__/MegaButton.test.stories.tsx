import { useState } from 'react';

import {
  MegaButton,
  MegaButtonComponentCommonProps,
  MegaButtonDiscriminatedProp,
} from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, Page, ScreenshotOptions } from 'puppeteer';

import '../classnames.stories.css';

const wrapper = '[data-test-block]';
const defaultMegaButtonText = 'Klikk her';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: MegaButton,
  title: 'Tests / MegaButton',
} as ComponentMeta<typeof MegaButton>;

const Template: ComponentStory<typeof MegaButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
    <MegaButton {...args}>{args.children}</MegaButton>
  </div>
);

const defaultArgs: MegaButtonComponentCommonProps = {
  children: defaultMegaButtonText,
};

// Når MegaButton instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const MegaButtonDefaults = Template.bind({});
MegaButtonDefaults.storyName = 'Defaults';
MegaButtonDefaults.args = {
  ...defaultArgs,
};
MegaButtonDefaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultMegaButtonText);

    const image = await page.screenshot(screenShotOptions);
    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();

    const megaButtonElement = await page.$(`${wrapper} > button`);
    await megaButtonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());
    await megaButtonElement?.hover();
    //await waitForTransitionEnd(`${wrapper} > button`, page);
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    await megaButtonElement?.click();
    await page.waitForSelector(`${wrapper} > button:focus`);
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > button`, (el: any) => el.blur());

    //active uten focus
    const cdp = await page.target().createCDPSession();
    const docNodeId = (await cdp.send('DOM.getDocument')).root.nodeId;
    const nodeId = (
      await cdp.send('DOM.querySelector', {
        nodeId: docNodeId,
        selector: `${wrapper} > button`,
      })
    ).nodeId;

    await cdp.send('CSS.enable');
    await cdp.send('CSS.forcePseudoState', {
      nodeId: nodeId,
      forcedPseudoClasses: ['active'],
    });

    const imageActive = await page.screenshot(screenShotOptions);
    expect(imageActive).toMatchImageSnapshot();
  },
};

// Når MegaButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
  children: defaultMegaButtonText,
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
WithId.args = {
  ...MegaButtonDefaults.args,
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

// Når MegaButton har isExternal, så vises riktig ikon. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  isExternal: true,
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
    expect(svgAttributes.role).toBe('img');
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.ariaLabel).toBeNull();
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

export const Disabled = Template.bind({});
const discriminatedProps: MegaButtonDiscriminatedProp = {
  href: undefined,
  disabled: true,
};
Disabled.args = {
  ...defaultArgs,
  ...discriminatedProps,
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

// Når MegaButton har et ikon og er disabled, så vises iconet og knapp er disabled
export const DisabledWithIcon = Template.bind({});

DisabledWithIcon.args = {
  ...defaultArgs,
  isExternal: true,
  ...discriminatedProps,
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

// Når MegaButton har en custom CSS, så vises custom stil
export const WithCustomCSS = Template.bind({});
WithCustomCSS.args = {
  ...defaultArgs,
  className: 'dummyClassname ',
};
WithCustomCSS.argTypes = {
  ...WithCustomCSS.argTypes,
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
WithCustomCSS.parameters = {
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

// Når MegaButton har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra customCSS
export const WithCustomCSSAndDisabled = Template.bind({});
WithCustomCSSAndDisabled.args = {
  children: defaultMegaButtonText,
  disabled: true,
  className: 'dummyClassname',
};
WithCustomCSSAndDisabled.argTypes = {
  ...WithCustomCSSAndDisabled.argTypes,
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
WithCustomCSSAndDisabled.parameters = {
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

// Når MegaButton har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'testid1234',
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaDescribedBy).toBe('testid1234');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når MegaButton har en accessKey, så settes den som forventet
export const withAccessKey = Template.bind({});
withAccessKey.args = {
  children: defaultMegaButtonText,
  accessKey: 'j',
};
withAccessKey.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const megaButtonElement = await page.$(`${wrapper} > button`);
    const accessKey = await (
      await megaButtonElement?.getProperty('accessKey')
    )?.jsonValue();
    expect(accessKey).toBe('j');
  },
};

// Når MegaButton har en tabIndex, så har button-element tabIndex
export const WithTabindex = Template.bind({});
WithTabindex.args = {
  ...defaultArgs,
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
  ...defaultArgs,
  children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.',
};
WithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har en veldig lang tekst så skal teksten brytes over flere linjer
// og når det er et ikon skal ikonet plasseres løpende etter teksten
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.args = {
  ...defaultArgs,
  isExternal: true,
  children:
    'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje',
};
WithLongTextAndIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har en href og er eksternlink, så rendres den som en a og det vises eksternlink-ikon
export const AsLink = Template.bind({});
AsLink.args = {
  href: 'https://www.skatteetaten.no',
  children: defaultMegaButtonText,
};
AsLink.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har en href, så rendres den som en a
export const AsLinkExternal = Template.bind({});
AsLinkExternal.args = {
  href: 'https://www.skatteetaten.no',
  isExternal: true,
  children: defaultMegaButtonText,
};
AsLinkExternal.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    const megaButtonElement = await page.$(`${wrapper} > a`);
    const role = await (
      await megaButtonElement?.getProperty('role')
    )?.jsonValue();
    expect(role).toBe('button');

    await megaButtonElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > a`, (el: any) => el.blur());
    await megaButtonElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();
  },
};

// Testing onClick på knapp. onClick-event endrer teksten på knappen.
// Egen template for å kunne bruke useState som lar oss synliggjøre resultatet av en event
const OnClickTemplate: ComponentStory<typeof MegaButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onClick event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <MegaButton
        {...args}
        onClick={(): void => setButtText('Endret Tekst på Knapp')}
      >
        {buttText}
      </MegaButton>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.args = {
  ...defaultArgs,
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

    await page.waitForSelector(`${wrapper} > button:active`, { hidden: true });
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Endret Tekst på Knapp');
  },
};
