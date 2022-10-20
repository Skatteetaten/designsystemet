import { useState } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';
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

// Når MegaButton instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const MegaButtonDefaults = Template.bind({});
MegaButtonDefaults.args = {
  children: defaultMegaButtonText,
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

    //await page.waitForTimeout(300);
    const imageActive = await page.screenshot(screenShotOptions);
    expect(imageActive).toMatchImageSnapshot();
  },
};

// Når MegaButton har en ref, så får dom button elementet ref forwarded
export const MegaButtonWithRef = Template.bind({});
MegaButtonWithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
  children: defaultMegaButtonText,
};
MegaButtonWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når MegaButton har isExternal, så vises riktig ikon. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const MegaButtonWithIcon = Template.bind({});
MegaButtonWithIcon.args = {
  ...MegaButtonDefaults.args,
  isExternal: true,
};

MegaButtonWithIcon.parameters = {
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

export const MegaButtonDisabled = Template.bind({});
MegaButtonDisabled.args = {
  ...MegaButtonDefaults.args,
  disabled: true,
};
MegaButtonDisabled.parameters = {
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
export const MegaButtonDisabledWithIcon = Template.bind({});
MegaButtonDisabledWithIcon.args = {
  ...MegaButtonDefaults.args,
  isExternal: true,
  disabled: true,
};
MegaButtonDisabledWithIcon.parameters = {
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
export const MegaButtonClassNameChange = Template.bind({});
MegaButtonClassNameChange.args = {
  ...MegaButtonDefaults.args,
  className: 'buttonClassnameLight ',
};
MegaButtonClassNameChange.argTypes = {
  ...MegaButtonClassNameChange.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameDark', 'buttonClassnameLight'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
MegaButtonClassNameChange.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameLight');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har en custom CSS og er disabled, så vises disabled stil med overskrivinger fra customCSS
export const MegaButtonCustomCssAndDisabled = Template.bind({});
MegaButtonCustomCssAndDisabled.args = {
  ...MegaButtonDefaults.args,
  disabled: true,
  className: 'buttonClassnameLight',
};
MegaButtonCustomCssAndDisabled.argTypes = {
  ...MegaButtonCustomCssAndDisabled.argTypes,
  className: {
    control: 'select',
    options: ['', 'buttonClassnameLight', 'buttonClassnameDark'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: { defaultValue: { summary: '' } },
  },
};
MegaButtonCustomCssAndDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameLight');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har aria attributer, så har button element aria-* satt
export const MegaButtonWithArias = Template.bind({});
MegaButtonWithArias.args = {
  ...MegaButtonDefaults.args,
  ariaDescribedby: 'Knapp aria-describedby',
};
MegaButtonWithArias.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaDescribedBy).toBe('Knapp aria-describedby');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når MegaButton har en tabIndex, så har button-element tabIndex
export const MegaButtonWithTabindex = Template.bind({});
MegaButtonWithTabindex.args = {
  ...MegaButtonDefaults.args,
  tabIndex: -1,
};
MegaButtonWithTabindex.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const tabIndex = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('tabIndex')
    );
    expect(tabIndex).toBe('-1');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

export const MegaButtonWithLongText = Template.bind({});
MegaButtonWithLongText.args = {
  ...MegaButtonDefaults.args,
  children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.',
};
MegaButtonWithLongText.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når MegaButton har en veldig lang tekst så skal teksten brytes over flere linjer
// og når det er et ikon skal ikonet plasseres løpende etter teksten
export const MegaButtonWithLongTextAndIcon = Template.bind({});
MegaButtonWithLongTextAndIcon.args = {
  ...MegaButtonDefaults.args,
  isExternal: true,
  children:
    'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje',
};
MegaButtonWithLongTextAndIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
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
  ...MegaButtonDefaults.args,
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
