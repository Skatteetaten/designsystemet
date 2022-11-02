import React from 'react';

import {
  Icon,
  AccountChildSVGpath,
  AndreForholdSVGpath,
} from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../classnames.stories.css';

export default {
  component: Icon,
  title: 'Tests/Icon',
} as ComponentMeta<typeof Icon>;

const ariaLabel = 'aria-label';
const ariaLabelledby = 'aria-labelledby';
const ariaHidden = 'aria-hidden';

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: '150px' }} data-test-block>
    <Icon {...args} svgPath={AccountChildSVGpath} />
  </div>
);

const wrapper = '[data-test-block]';

// Når Icon instansieres, får den riktig defaults
export const Defaults = Template.bind({});
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

// Når Icon har en ref, så får svg elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.args = {
  ref: (instance: SVGSVGElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
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
WithId.args = {
  id: 'htmlid',
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
export const WithClassname = Template.bind({});
WithClassname.args = {
  className: 'myIconClassname',
};
WithClassname.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval('svg', (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('myIconClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

// Når Icon har en title, får den riktig <title> tag og aria attributer
export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Min custom title beskrivelse',
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

WithAriaLabel.args = {
  ariaLabel: 'min custom aria-label beskrivelse',
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

// Når Icon instansieres med variant="themeIcon", får den riktig viewBox og className
export const WithVariant = Template.bind({});
WithVariant.args = { variant: 'themeIcon', svgPath: AndreForholdSVGpath };
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
