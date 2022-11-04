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

// Når Icon har en ref, så får svg elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
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
WithId.storyName = 'With Id (FA2)';
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
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  className: 'myIconClassname',
};
WithCustomCss.parameters = {
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

// Når Icon har dataTestid, så har svg-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA4)';
WithDataTestid.args = {
  'data-testid': '123ID',
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

// Når Icon instansieres med en custom svgPath, så rendres den riktig
export const WithCustomSVG = Template.bind({});
WithCustomSVG.storyName = 'With Custom SVG (A4)';
WithCustomSVG.args = {
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
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
WithTitle.storyName = 'With  Title (B3)';
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
WithAriaLabel.storyName = 'With  Title (B4)';
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
