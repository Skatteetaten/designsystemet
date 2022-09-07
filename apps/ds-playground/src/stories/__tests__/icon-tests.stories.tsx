import { AccountChildIcon } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../icon.css';

/* eslint-disable jest/no-standalone-expect */
//TODO FRONT-826 eslint regel bør legges inn jest/no-standalone-expect
export default {
  component: AccountChildIcon,
  title: 'Tests/Icon',
} as ComponentMeta<typeof AccountChildIcon>;

const Template: ComponentStory<typeof AccountChildIcon> = (args) => (
  <div style={{ width: '150px' }} data-test-block>
    <AccountChildIcon {...args} />
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

//TODO FRONT-842 jobbe videre med disse testene:
export const IconWithTitleAndClassName = Template.bind({});
IconWithTitleAndClassName.args = {
  title: 'Some title',
  className: 'myIconClassname',
};

export const IconWithRole = Template.bind({});
IconWithRole.args = { role: 'img' };

export const IconWithAriaLabel = Template.bind({});
IconWithAriaLabel.args = { 'aria-label': 'Some aria-label' };

export const IconWithViewbox = Template.bind({});
IconWithViewbox.args = { viewBox: '0 0 48 48' };

export const IconWithSize = Template.bind({});
IconWithSize.args = { size: 'small' };
