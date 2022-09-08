import { Button } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';
import './css-for-test.css';

const wrapper = '[data-test-block]';
const defaultButtonText = 'Standardtekst på knapp';

/* eslint-disable jest/no-standalone-expect */
export default {
  component: Button,
  title: 'Tests/Button',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    (Story) => (
      <div style={{ margin: '1em' }} {...{ wrapper }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant={args.variant}>
    {args.children}
  </Button>
);

export const ButtonDefaults = Template.bind({});

const baseArgs = {
  children: defaultButtonText,
};

ButtonDefaults.args = {
  ...baseArgs,
  variant: 'primary',
};

ButtonDefaults.storyName = 'Default';
ButtonDefaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
  //TODO Vi legger inn og eller endrer flere parametere her eller i neste test
};
ButtonSecondary.storyName = 'With icon';
ButtonSecondary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonTertiary = Template.bind({});
ButtonTertiary.args = {
  ...ButtonDefaults.args,
  variant: 'secondary',
  className: 'testGreenish',
  //TODO Vi legger inn og eller endrer flere parametere her eller i neste test
};
ButtonTertiary.storyName = 'Custom CSS';
ButtonTertiary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

//TODO FRONT-842 jobbe videre med disse testene:
/* export const IconWithTitleAndClassName = Template.bind({});
IconWithTitleAndClassName.args = {
  title: 'Some title',
  className: 'myIconClassname',
};

export const IconWithRole = Template.bind({});
IconWithRole.args = { role: 'img' };
*/
