import { useState } from 'react';

import { AxePuppeteer } from '@axe-core/puppeteer';
import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CalendarSVGpath } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import '../classnames.stories.css';
import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const elementId = 'htmlId';
const systemIconViewBox = '0 0 24 24';
const defaultLinkText = 'Er du pendler?';

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
  component: Link,
  title: 'Tester/Link',
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
    color: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    // HTML
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <div className={'noTransition'} data-test-block>
    <Link {...args} onClick={(e): void => e.preventDefault()}>
      {args.children}
    </Link>
  </div>
);

const defaultArgs: LinkProps = {
  href: '#root',
  children: defaultLinkText,
};

// Når Link har en ref, så får dom a elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLAnchorElement | null): void => {
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

    const refId = await page.$eval(`${wrapper} > a`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');
  },
};

// Når Link har en id, så har a-element id
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: elementId,
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const id = await page.$eval(`${wrapper} > a`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe(elementId);
  },
};

// Når Link har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  ...WithCustomCss.argTypes,
  className: { table: { disable: false } },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const classNameAttribute = await page.$eval(`${wrapper}> a`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');
  },
};

// Når Link har en lang, så har a-element lang
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

    const langAttribute = await page.$eval(`${wrapper} > a`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');
  },
};

// Når Link har dataTestid, så har link-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123ID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const dataTestid = await page.$eval(`${wrapper} > a`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123ID');
  },
};

// Når Link instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName =
  'Defaults (A1 delvis, A2 - 1 av 2, A3 delvis, B1 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  href: { table: { disable: false } },
  children: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const element = await page.$(wrapper);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultLinkText);

    const linkAttribute = await page.$eval(`${wrapper} > a`, (el) => {
      return {
        target: el.getAttribute('target'),
        rel: el.getAttribute('rel'),
      };
    });
    expect(linkAttribute.target).toBeNull();
    expect(linkAttribute.rel).toBeNull();

    const svgElement = await page.$(`${wrapper} > a svg`);
    expect(svgElement).toBeNull();

    const linkElement = await page.$(`${wrapper} > a`);

    await linkElement?.focus();
    const imageFocused = await page.screenshot(screenShotOptions);
    expect(imageFocused).toMatchImageSnapshot();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval(`${wrapper} > a`, (el: any) => el.blur());

    await linkElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    // active
    const cdp = await page.target().createCDPSession();
    const docNodeId = (await cdp.send('DOM.getDocument')).root.nodeId;
    const nodeId = (
      await cdp.send('DOM.querySelector', {
        nodeId: docNodeId,
        selector: `${wrapper} > a`,
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

// Når Link har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 delvis)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};
WithLongText.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Link har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text And Breaking (A1 delvis)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Dennelenkenharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertuansettomikonellerikke.',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};
WithLongTextBreaking.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Link har en veldig lang tekst, valgfritt ikon og eksternal ikon så skal tekst venstrejusteres
export const WithLongTextIconAndExternalIcon = Template.bind({});
WithLongTextIconAndExternalIcon.storyName =
  'With Long Text And Icons (A1 delvis)';
WithLongTextIconAndExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
  svgPath: CalendarSVGpath,
  children:
    'Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
};
WithLongTextIconAndExternalIcon.argTypes = {
  ...WithLongTextIconAndExternalIcon.argTypes,
  isExternal: { table: { disable: false } },
  svgPath: { table: { disable: false } },
  children: { table: { disable: false } },
};
WithLongTextIconAndExternalIcon.parameters = {
  puppeteerTest: verifySnapshotsAndAxeRules,
};

// Når Link har ett valgfritt ikon, så vises ikonet. Tester også for de icon props som er relevant for saken med systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A4, B2)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: CalendarSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { table: { disable: false } },
};
WithIcon.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifySnapshotsAndAxeRules(page);

    const svgElement = await page.$(`${wrapper} > a svg`);
    expect(svgElement).toBeTruthy();

    const svgAttributes = await page.$eval(`${wrapper} > a svg`, (el) => {
      return {
        ariaHidden: el.getAttribute('aria-hidden'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.ariaHidden).toBe('true');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);
  },
};

// Når Link har isExternal, så vises riktig ikon med tilhørende tekst. Tester også for de icon props som er relevant for saken med systemIcon som er brukt
export const WithExternalIcon = Template.bind({});
WithExternalIcon.storyName = 'With External Icon (A5)';
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

    const svgElement = await page.$(`${wrapper} > a svg`);
    expect(svgElement).toBeTruthy();

    const svgAttributes = await page.$eval(`${wrapper} > a svg`, (el) => {
      return {
        ariaLabel: el.getAttribute('aria-label'),
        viewBox: el.getAttribute('viewBox'),
      };
    });
    expect(svgAttributes.ariaLabel).toBe('shared.ExternalIcon');
    expect(svgAttributes.viewBox).toBe(systemIconViewBox);
  },
};

// Når Link har color white, så vises tekst og ikon i hvit
export const WithColor = Template.bind({});
WithColor.storyName = 'With Color (A6)';
WithColor.args = {
  ...defaultArgs,
  color: 'white',
  isExternal: true,
  svgPath: AddOutlineSVGpath,
};
WithColor.argTypes = {
  ...WithColor.argTypes,
  color: {
    options: ['default', ...linkColorArr],
    mapping: {
      default: '',
      ...linkColorArr,
    },
    control: 'inline-radio',
    table: {
      disable: false,
    },
  },
};
WithColor.parameters = {
  backgrounds: {
    default: 'themePrimary',
  },
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);
  },
};

// Når Link har target, så har link-elementet target med riktig verdi
export const WithTarget = Template.bind({});
WithTarget.storyName = 'With Target (A2  - 2 av 2)';
WithTarget.args = {
  ...defaultArgs,
  target: '_blank',
};
WithTarget.argTypes = {
  ...WithTarget.argTypes,
  target: { table: { disable: false } },
};
WithTarget.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const linkAttribute = await page.$eval(`${wrapper} > a`, (el) => {
      return {
        target: el.getAttribute('target'),
        rel: el.getAttribute('rel'),
      };
    });
    expect(linkAttribute.target).toBe('_blank');
    expect(linkAttribute.rel).toBeTruthy();
  },
};

// Når Link har ariaDescribedby, så har link element aria-describedby satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B3)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: elementId,
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchSnapShot(page);
    await verifyAxeRules(page);

    const ariaDescribedBy = await page.$eval(`${wrapper} > a`, (el) =>
      el.getAttribute('aria-describedby')
    );
    expect(ariaDescribedBy).toBe(elementId);
  },
};

// Når brukeren klikker på lenken, så kalles funksjonen i onClick prop.
// onClick-event endrer lenketeksten til lenken
const nyLinkText = 'Ny lenketekst slik at vi ser at event fungerte';
const OnClickTemplate: ComponentStory<typeof Link> = (args) => {
  const [linkText, setLinkText] = useState(
    'Klikk på lenken for å teste onClick event'
  );
  return (
    <div style={{ margin: '1em' }} className={'noTransition'} data-test-block>
      <Link
        {...args}
        onClick={(e): void => {
          e.preventDefault();
          setLinkText(nyLinkText);
        }}
      >
        {linkText}
      </Link>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.storyName = 'With onClick (A3 delvis)';
WithOnClick.args = {
  ...defaultArgs,
  svgPath: CalendarSVGpath,
};
WithOnClick.argTypes = {
  ...WithOnClick.argTypes,
  svgPath: { table: { disable: false } },
  onClick: { table: { disable: false } },
};
WithOnClick.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    await verifyMatchImageSnapShot(page);
    await verifyAxeRules(page);

    const linkElement = await page.$(`${wrapper} > a`);
    await linkElement?.click();
    const imageClicked = await page.screenshot(screenShotOptions);
    expect(imageClicked).toMatchImageSnapshot();

    await page.waitForSelector(`${wrapper} > a`);
    const element = await page.$(`${wrapper} > a`);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(nyLinkText);
  },
};
