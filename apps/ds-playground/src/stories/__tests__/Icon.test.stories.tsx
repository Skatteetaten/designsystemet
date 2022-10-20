import React from 'react';

import { Icon, AccountChildSVGpath } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../classnames.stories.css';

export default {
  component: Icon,
  title: 'Tests/Icon',
} as ComponentMeta<typeof Icon>;

const ariaLabel = 'ariaLabel';
const ariaLabelledby = 'aria-labelledby';
const ariaHidden = 'aria-hidden';

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: '150px' }} data-test-block>
    <Icon {...args} svgPath={AccountChildSVGpath} />
  </div>
);

const wrapper = '[data-test-block]';

export const IconDefaults = Template.bind({});

// Når Icon instansieres, får den riktig defaults
IconDefaults.parameters = {
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
export const IconWithRef = Template.bind({});
IconWithRef.args = {
  ref: (instance: SVGSVGElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
IconWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const idAttribute = await page.$eval('svg', (el) => el.getAttribute('id'));
    expect(idAttribute).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har en custom className, får den riktig class attribute i tillegg til andre classer og stilen forandret seg
export const IconWithClassname = Template.bind({});
IconWithClassname.args = {
  className: 'myIconClassname',
};
IconWithClassname.parameters = {
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

// Når Icon har en title, får den riktig <title> tag, role og aria attributer
export const IconWithTitle = Template.bind({});
IconWithTitle.args = {
  title: 'Min custom title beskrivelse',
};
IconWithTitle.parameters = {
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
          role: el.getAttribute('role'),
          ariaLabel: el.getAttribute(ariaLabel),
          ariaLabelledBy: el.getAttribute(ariaLabelledby),
          ariaHidden: el.getAttribute(ariaHidden),
          titleId: el.querySelector('title')?.getAttribute('id'),
        };
      },
      { ariaLabel, ariaLabelledby, ariaHidden }
    );

    expect(ariaAttributes.role).toBe('img');
    expect(ariaAttributes.ariaHidden).toBe('false');
    expect(ariaAttributes.ariaLabel).toBeNull();
    expect(ariaAttributes.ariaLabelledBy).toBe(ariaAttributes.titleId);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Icon har en aria-label, får den ikke noe <title> tag, og riktig role og aria attributer
export const IconWithAriaLabel = Template.bind({});
IconWithAriaLabel.args = {
  ariaLabel: 'min custom aria-label beskrivelse',
};
IconWithAriaLabel.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const ariaAttributes = await page.$eval(
      'svg',
      (el, { ariaLabel, ariaLabelledby, ariaHidden }) => {
        return {
          role: el.getAttribute('role'),
          ariaLabel: el.getAttribute(ariaLabel),
          ariaLabelledBy: el.getAttribute(ariaLabelledby),
          ariaHidden: el.getAttribute(ariaHidden),
        };
      },
      { ariaLabel, ariaLabelledby, ariaHidden }
    );

    expect(ariaAttributes.role).toBe('img');
    expect(ariaAttributes.ariaHidden).toBe('false');
    expect(ariaAttributes.ariaLabel).toBe('min custom aria-label beskrivelse');
    expect(ariaAttributes.ariaLabelledBy).toBeNull();
    expect(innerHtml).toMatchSnapshot();
  },
};

export const IconWithRole = Template.bind({});
IconWithRole.args = { role: 'custom-role' };
IconWithRole.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const role = await page.$eval('svg', (el) => el.getAttribute('role'));
    expect(role).toBe('custom-role');
  },
};

export const IconWithTabIndex = Template.bind({});
IconWithTabIndex.args = { tabIndex: -1 };
IconWithTabIndex.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const tabIndex = await page.$eval('svg', (el) =>
      el.getAttribute('tabindex')
    );
    expect(tabIndex).toBe('-1');
  },
};

export const IconWithViewbox = Template.bind({});
IconWithViewbox.args = { viewBox: '0 0 56 56' };
IconWithViewbox.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const viewBox = await page.$eval('svg', (el) => el.getAttribute('viewBox'));
    expect(viewBox).toBe('0 0 56 56');
  },
};
