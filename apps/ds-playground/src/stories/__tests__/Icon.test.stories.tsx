import React from 'react';

import {
  Icon,
  IconComponentCommonProps,
  AccountChildSVGpath,
  AndreForholdSVGpath,
} from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../classnames.stories.css';
import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

export default {
  component: Icon,
  title: 'Tests/Icon',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    size: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'text',
    },
    // Aria
    ariaLabel: { table: { disable: true } },
  },
} as ComponentMeta<typeof Icon>;

const ariaLabel = 'aria-label';
const ariaLabelledby = 'aria-labelledby';
const ariaHidden = 'aria-hidden';

const defaultArgs: IconComponentCommonProps = {
  svgPath: AccountChildSVGpath,
};

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: '150px' }} data-test-block>
    <Icon {...args} />
  </div>
);

const wrapper = '[data-test-block]';

// Når Icon har en ref, så får svg elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: SVGSVGElement | null): void => {
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
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const idAttribute = await page.$eval('svg', (el) => el.getAttribute('id'));
    expect(idAttribute).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har en id, så får svg elementet id forwarded
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
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const elementid = await page.$eval('svg', (el) => el.getAttribute('id'));
    expect(elementid).toBe('htmlid');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har en custom className, får den riktig class attribute i tillegg til andre classer og stilen forandret seg
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
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval('svg', (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

// Når Icon har en lang, så har svg-element lang
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
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const langAttribute = await page.$eval('svg', (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har dataTestid, så har svg-elementet data-testid satt
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
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestid = await page.$eval('svg', (el) =>
      el.getAttribute('data-testid')
    );

    expect(dataTestid).toBe('123ID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon instansieres, får den riktig defaults
export const Defaults = Template.bind({});
Defaults.storyName = 'With Default - Variant SystemIcon (B1, B5, A1 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  svgPath: {
    table: { disable: false },
    options: Object.keys(SystemSVGPaths),
    mapping: SystemSVGPaths,
  },
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const ariaAttributes = await page.$eval(
      'svg',
      (el, { ariaLabel, ariaLabelledby, ariaHidden }) => {
        return {
          viewBox: el.getAttribute('viewBox'),
          role: el.getAttribute('role'),
          ariaLabel: el.getAttribute(ariaLabel),
          ariaLabelledBy: el.getAttribute(ariaLabelledby),
          ariaHidden: el.getAttribute(ariaHidden),
        };
      },
      { ariaLabel, ariaLabelledby, ariaHidden }
    );

    expect(ariaAttributes.viewBox).toBe('0 0 24 24');
    expect(ariaAttributes.role).toBe('img');
    expect(ariaAttributes.ariaHidden).toBe('true');
    expect(ariaAttributes.ariaLabel).toBeNull();
    expect(ariaAttributes.ariaLabelledBy).toBeNull();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når Icon instansieres med variant="themeIcon", får den riktig viewBox og className
export const WithVariant = Template.bind({});
WithVariant.storyName = 'With Variant ThemeIcon (A1 - 2 av 2)';
WithVariant.args = {
  ...defaultArgs,
  svgPath: AndreForholdSVGpath,
  variant: 'themeIcon',
};
WithVariant.argTypes = {
  ...WithVariant.argTypes,
  svgPath: {
    table: { disable: false },
    options: Object.keys(ThemeSVGPaths),
    mapping: ThemeSVGPaths,
  },
  variant: { table: { disable: false } },
};
WithVariant.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const elementAttributes = await page.$eval('svg', (el) => {
      return {
        viewBox: el.getAttribute('viewBox'),
        className: el.getAttribute('class'),
      };
    });

    expect(elementAttributes.viewBox).toBe('0 0 48 48');
    expect(elementAttributes.className).toContain('Icon_themeIcon_medium');

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når Icon instansieres med en custom svgPath, så rendres den riktig
export const WithCustomSVG = Template.bind({});
WithCustomSVG.storyName = 'With Custom SVG (A4)';
WithCustomSVG.args = {
  ...defaultArgs,
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
};
WithCustomSVG.argTypes = {
  ...WithCustomSVG.argTypes,
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};
WithCustomSVG.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

// Når Icon har en title, får den riktig <title> tag og aria attributer
export const WithTitle = Template.bind({});
WithTitle.storyName = 'With Title (B3)';
WithTitle.args = {
  ...defaultArgs,
  title: 'Min custom title beskrivelse',
};
WithTitle.argTypes = {
  ...WithTitle.argTypes,
  title: { table: { disable: false } },
};
WithTitle.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Min custom title beskrivelse');

    const ariaAttributes = await page.$eval(
      'svg',
      (el, { ariaLabel, ariaLabelledby, ariaHidden }) => {
        return {
          ariaLabel: el.getAttribute(ariaLabel),
          ariaLabelledBy: el.getAttribute(ariaLabelledby),
          ariaHidden: el.getAttribute(ariaHidden),
          titleId: el.querySelector('title')?.getAttribute('id'),
        };
      },
      { ariaLabel, ariaLabelledby, ariaHidden }
    );

    expect(ariaAttributes.ariaHidden).toBe('false');
    expect(ariaAttributes.ariaLabel).toBeNull();
    expect(ariaAttributes.ariaLabelledBy).toBe(ariaAttributes.titleId);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har en aria-label, får den ikke noe <title> tag, og riktig aria attributer
export const WithAriaLabel = Template.bind({});
WithAriaLabel.storyName = 'With AriaLabel (B4)';
WithAriaLabel.args = {
  ...defaultArgs,
  ariaLabel: 'min custom aria-label beskrivelse',
};
WithAriaLabel.argTypes = {
  ...WithAriaLabel.argTypes,
  ariaLabel: { table: { disable: false } },
};
WithAriaLabel.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const ariaAttributes = await page.$eval(
      'svg',
      (el, { ariaLabel, ariaLabelledby, ariaHidden }) => {
        return {
          ariaLabel: el.getAttribute(ariaLabel),
          ariaLabelledBy: el.getAttribute(ariaLabelledby),
          ariaHidden: el.getAttribute(ariaHidden),
        };
      },
      { ariaLabel, ariaLabelledby, ariaHidden }
    );

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('');

    expect(ariaAttributes.ariaHidden).toBe('false');
    expect(ariaAttributes.ariaLabel).toBe('min custom aria-label beskrivelse');
    expect(ariaAttributes.ariaLabelledBy).toBeNull();
    expect(innerHtml).toMatchSnapshot();
  },
};
