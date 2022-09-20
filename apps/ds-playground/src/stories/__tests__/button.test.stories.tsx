import { Button } from '@skatteetaten/ds-buttons';
import { Icon as DefaultIcon, SendIcon } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

const wrapper = '[data-test-block]';
// Default tekst som er satt i Button-komponent.
// Må være identisk i testen hvor vi ikke provider children til komponent
const defaultButtonText = 'Klikk her';

/* eslint-disable jest/no-standalone-expect */
export default {
  component: Button,
  title: 'Tests / Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ margin: '1em' }} data-test-block>
    <Button
      {...args}
      variant={args.variant}
      icon={args.icon ? args.icon : undefined}
    >
      {args.children}
    </Button>
  </div>
);

export const ButtonDefaults = Template.bind({});

/* const baseArgs = {
  children: defaultButtonText,
}; */

ButtonDefaults.args = {
  /* ...baseArgs, */
};

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

export const ButtonWithVariantSecondary = Template.bind({});
ButtonWithVariantSecondary.args = { variant: 'secondary' };
ButtonWithVariantSecondary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const element = await page.$(wrapper);
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe(defaultButtonText);

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonWithVariantTertiary = Template.bind({});
ButtonWithVariantTertiary.args = { variant: 'tertiary' };
ButtonWithVariantTertiary.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonWithVariantDanger = Template.bind({});
ButtonWithVariantDanger.args = { variant: 'danger' };
ButtonWithVariantDanger.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonWithChildren = Template.bind({});
ButtonWithChildren.args = { children: 'Button with children' };
ButtonWithChildren.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const element = await page.$(wrapper);
    const textContent = await element?.getProperty('textContent');
    const text = await textContent?.jsonValue();
    expect(text).toBe('Button with children');

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: <SendIcon {...DefaultIcon.arguments} />,
};
ButtonWithIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonDisabledWithIcon = Template.bind({});
ButtonDisabledWithIcon.args = {
  icon: <SendIcon {...DefaultIcon.arguments} />,
  disabled: true,
};
ButtonDisabledWithIcon.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonClassNameChange = Template.bind({});
ButtonClassNameChange.args = {
  variant: 'secondary',
  className: 'buttonClassnameGreen',
};
ButtonClassNameChange.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameGreen');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  disabled: true,
};
ButtonDisabled.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonVariantDisabledCustomCSS = Template.bind({});
ButtonVariantDisabledCustomCSS.args = {
  disabled: true,
  className: 'buttonClassnameGreen',
};
ButtonVariantDisabledCustomCSS.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const isDisabled = await page.$(`${wrapper} > button[disabled]`);
    expect(isDisabled).toBeTruthy();

    const classNameAttribute = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('buttonClassnameGreen');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot({
      fullPage: true,
      encoding: 'base64',
    });
    expect(image).toMatchImageSnapshot();
  },
};

export const ButtonWithArias = Template.bind({});
ButtonWithArias.args = {
  'aria-hidden': true,
  'aria-label': 'Knapp aria-label',
  'aria-describedby': 'Knapp aria-describedby',
};
ButtonWithArias.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const ariaAttributes = await page.$eval(`${wrapper} > button`, (el) => {
      return {
        ariaHidden: el.getAttribute('aria-hidden'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaDescribedBy: el.getAttribute('aria-describedby'),
      };
    });
    expect(ariaAttributes.ariaHidden).toBe('true');
    expect(ariaAttributes.ariaLabel).toBe('Knapp aria-label');
    expect(ariaAttributes.ariaDescribedBy).toBe('Knapp aria-describedby');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

export const ButtonWithRef = Template.bind({});
ButtonWithRef.args = {
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
ButtonWithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > button`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

export const ButtonWithTabindex = Template.bind({});
ButtonWithTabindex.args = {
  tabIndex: -1,
};
ButtonWithTabindex.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const tabIndex = await page.$eval(`${wrapper} > button`, (el) =>
      el.getAttribute('tabIndex')
    );
    expect(tabIndex).toBe('-1');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

/* export const ButtonWithClick = Template.bind({});
ButtonWithClick.args = {
  onClick: (): undefined => {
    return undefined;
  },
};
ButtonWithClick.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const buttn = (await page.$(`${wrapper} > button`)) as ElementHandle;
    await buttn.click();

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
}; */
