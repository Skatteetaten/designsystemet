import { Icon, AccountChildSVGpath } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../icon.stories.css';

/* eslint-disable jest/no-standalone-expect */
//TODO fjernes når eslint-PR er inne
export default {
  component: Icon,
  title: 'Tests/Icon',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: '150px' }} data-test-block>
    <Icon {...args} svgPath={AccountChildSVGpath} />
  </div>
);

const wrapper = '[data-test-block]';

export const IconDefaults = Template.bind({});

IconDefaults.args = {
  title: 'Default title',
  viewBox: '0 0 24 24',
};

IconDefaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(
      '[data-test-block]',
      (el) => el.innerHTML
    );

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Default title');

    const viewBoxAttribute = await page.$eval('svg', (el) =>
      el.getAttribute('viewBox')
    );
    expect(viewBoxAttribute).toBe('0 0 24 24');

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

//Legge til test med Ref
export const IconWithClassName = Template.bind({});
IconWithClassName.args = {
  className: 'myIconClassname',
};

export const IconWithTitle = Template.bind({});
IconWithTitle.args = {
  title: 'min custom title beskrivelse',
};

export const IconWithAriaLabel = Template.bind({});
IconWithAriaLabel.args = {
  'aria-label': 'min custom aria-label beskrivelse',
};

export const IconWithRole = Template.bind({});
IconWithRole.args = { role: 'img' };

export const IconWithViewbox = Template.bind({});
IconWithViewbox.args = { viewBox: '0 0 48 48' };

export const IconWithSize = Template.bind({});
IconWithSize.args = { size: 'extraLarge' };
