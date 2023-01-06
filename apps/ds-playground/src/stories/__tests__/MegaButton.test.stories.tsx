import { useState } from 'react';

import { AxePuppeteer } from '@axe-core/puppeteer';
import {
  MegaButton,
  MegaButtonComponentCommonProps,
  MegaButtonDiscriminatedProp,
} from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import '../classnames.stories.css';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

const defaultMegaButtonText = 'Klikk her';

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

export default {
  component: MegaButton,
  title: 'Tests / MegaButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    isExternal: { table: { disable: true } },
    // HTML
    accessKey: {
      table: { disable: true },
      control: 'text',
    },
    disabled: { table: { disable: true } },
    href: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof MegaButton>;

const Template: ComponentStory<typeof MegaButton> = (args) => (
  <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
    <MegaButton {...args}>{args.children}</MegaButton>
  </div>
);

const defaultArgs: MegaButtonComponentCommonProps = {
  children: defaultMegaButtonText,
};

// Når MegaButton har en ref, så får dom button elementet ref forwarded
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

// Når MegaButton har en id, så har button-element id
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

    const elementid = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('id')
    );
    expect(elementid).toBe('htmlid');
  },
};

// Når MegaButton har en custom CSS, så vises custom stil
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

// Når MegaButton har en lang, så har button-element lang
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

// Når MegaButton har dataTestid, så har button-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123Mega',
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
    expect(dataTestid).toBe('123Mega');
  },
};

// Når MegaButton instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 - 1 av 2, B2 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const element = await page.$(wrapper);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultMegaButtonText);

    const attributeType = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('type')
    );
    expect(attributeType).toBe('button');

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

// Når MegaButton har en veldig lang tekst så skal det brekke over flere linjer
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A2 - 1 av 3)';
WithLongText.args = {
  ...defaultArgs,
  children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};
WithLongText.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når MegaButton har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName =
  'With Long Text Breaking (A1 - 2 av 2, A2 - 2 av 3)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children: 'Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke.',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};
WithLongTextBreaking.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når MegaButton har isExternal, så vises riktig ikon. tester også for riktig aria, role og viewbox for systemIcon som er brukt
export const WithExternalIcon = Template.bind({});
WithExternalIcon.storyName = 'With External Icon (A4 - 1 av 2, B5, B7)';
WithExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
};
WithExternalIcon.argTypes = {
  ...WithExternalIcon.argTypes,
  isExternal: { table: { disable: false } },
};
WithExternalIcon.parameters = {
  locale: 'cimode',
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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
    expect(svgAttributes.ariaLabel).toBe('shared.ExternalIcon');
    expect(svgAttributes.ariaLabelledBy).toBeNull();
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);
  },
};

// Når MegaButton har en veldig lang tekst så skal teksten brytes over flere linjer
// og når det er et ikon skal ikonet plasseres løpende etter teksten
export const WithLongTextAndExternalIcon = Template.bind({});
WithLongTextAndExternalIcon.storyName =
  'With Long Text and External Icon (A2 - 3 av 3)';
WithLongTextAndExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
  children:
    'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje',
};
WithLongTextAndExternalIcon.argTypes = {
  ...WithLongTextAndExternalIcon.argTypes,
  children: { table: { disable: false } },
  isExternal: { table: { disable: false } },
};
WithLongTextAndExternalIcon.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

export const Disabled = Template.bind({});
Disabled.storyName = 'Disabled (B6)';
const discriminatedProps: MegaButtonDiscriminatedProp = {
  href: undefined,
  disabled: true,
};
Disabled.args = {
  ...defaultArgs,
  ...discriminatedProps,
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

// Når MegaButton har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B2 - 2 av 2)';
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

// Når MegaButton har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B1)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'testid1234',
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaDescribedby: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaDescribedby).toBe('testid1234');
  },
};

// Når MegaButton har en accessKey, så settes den som forventet
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B4)';
WithAccesskey.args = {
  children: defaultMegaButtonText,
  accessKey: 'j',
};
WithAccesskey.argTypes = {
  ...WithAccesskey.argTypes,
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyAxeRules(page);

    const megaButtonElement = await page.$(`${wrapper} > button`);
    const accessKey = await (
      await megaButtonElement?.getProperty('accessKey')
    )?.jsonValue();
    expect(accessKey).toBe('j');
  },
};

// Når MegaButton har en href, så rendres den som en a
export const AsLink = Template.bind({});
AsLink.storyName = 'As Link (B3)';
AsLink.args = {
  ...defaultArgs,
  href: 'https://www.skatteetaten.no',
};
AsLink.argTypes = {
  ...AsLink.argTypes,
  href: { table: { disable: false } },
};
AsLink.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når MegaButton har en href med tom streng, så rendres den som en a
export const AsLinkEmptyString = Template.bind({});
AsLinkEmptyString.storyName = 'As Link with empty href (B3)';
AsLinkEmptyString.args = {
  ...defaultArgs,
  href: '',
};
AsLinkEmptyString.argTypes = {
  ...AsLinkEmptyString.argTypes,
  href: { table: { disable: false } },
};
AsLinkEmptyString.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når MegaButton har en href og er eksternlink, så rendres den som en a og det vises eksternlink-ikon
export const AsLinkExternal = Template.bind({});
AsLinkExternal.storyName = 'As Link External (B3, A4 - 2 av 2)';
AsLinkExternal.args = {
  ...defaultArgs,
  href: 'https://www.skatteetaten.no',
  isExternal: true,
};
AsLinkExternal.argTypes = {
  ...AsLinkExternal.argTypes,
  href: { table: { disable: false } },
  isExternal: { table: { disable: false } },
};
AsLinkExternal.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

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

// Når brukeren blurer knappen, så kalles funksjonen i onBlur prop.
// onBlur-event endrer teksten på knappen.
const OnBlurTemplate: ComponentStory<typeof MegaButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onBlur event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <MegaButton {...args} onBlur={(): void => setButtText('Knapp er bluret')}>
        {buttText}
      </MegaButton>
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

    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp er bluret');
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

    await page.waitForSelector(`${wrapper} > button:active`, { hidden: true });
    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Endret Tekst på Knapp');
  },
};

// Når brukeren setter focus på knappen, så kalles funksjonen i onFocus prop.
// onFocus-event endrer teksten på knappen.
const OnFocusTemplate: ComponentStory<typeof MegaButton> = (args) => {
  const [buttText, setButtText] = useState(
    'Klikk på knapp for å teste onFocus event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <MegaButton
        {...args}
        onFocus={(): void => setButtText('Knapp har fått fokus')}
      >
        {buttText}
      </MegaButton>
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

    const element = await page.$(`${wrapper} > button`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Knapp har fått fokus');
  },
};
