import { Blockquote, BlockquoteProps } from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

const wrapper = '[data-test-block]';
const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

export default {
  component: Blockquote,
  title: 'Tests / Blockquote',
} as ComponentMeta<typeof Blockquote>;

const defaultArgs: BlockquoteProps = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
};
const Template: ComponentStory<typeof Blockquote> = (args) => (
  <div data-test-block>
    <Blockquote {...args} />
  </div>
);

// Når Blockquote har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLQuoteElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const refId = await page.$eval(`${wrapper} > blockquote`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Blockquote har en id, så har elementet id'en satt
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'BlockquoteId',
};
WithId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const id = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('BlockquoteId');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Blockquote har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
  },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const classNameAttribute = await page.$eval(
      `${wrapper} > blockquote`,
      (el) => el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når Blockquote har dataTestId, så har elementet data-testid satt
export const WithDataTestId = Template.bind({});
WithDataTestId.storyName = 'With DataTestid (FA4)';
WithDataTestId.args = {
  ...defaultArgs,
  'data-testid': 'BlockquoteID',
};
WithDataTestId.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const dataTestId = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestId).toBe('BlockquoteID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Blockquote har en lang, så har elementet lang satt
export const WithLang = Template.bind({});
WithLang.storyName = 'With Lang (FA5)';
WithLang.args = {
  ...defaultArgs,
  lang: 'nb',
};
WithLang.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const langAttribute = await page.$eval(`${wrapper} > blockquote`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når Blockquote instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1 - 1 av 2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

const TemplateWithMarkup: ComponentStory<typeof Blockquote> = (args) => (
  <div data-test-block>
    <Blockquote {...args}>
      <div>
        {'Manowar Manowar living on the road '}
        <a href={'https://en.wikipedia.org/wiki/Manowar'}>{'lenke'}</a>
      </div>
      <div>
        {"When we're on "}
        <strong>{'strong '}</strong>
        {'explode '}
        <em>{'italic em '}</em>
      </div>
      <div>
        {"We don't attract "}
        <code>{'code wimps '}</code>
        {"'cause we're too "}
        <mark>{'mark'}</mark>
      </div>
      <div>
        {'Just '}
        <i>{'italic i '}</i>
        {'true '}
        <small>{'small '}</small>
        {"people that's Manowar's "}
        <b>{'b'}</b>
      </div>
    </Blockquote>
  </div>
);

// Når Blockquote instansieres med markup, får markup riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup (A2, B1 - 2 av 2)';
WithMarkup.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};

const TemplateWithTwoBlockquotes: ComponentStory<typeof Blockquote> = (
  args
) => (
  <div data-test-block>
    <Blockquote {...args} />
    <Blockquote {...args} />
  </div>
);

// Når Blockquote har spacing, så får elementet en margin under sitatet
export const WithSpacing = TemplateWithTwoBlockquotes.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.parameters = {
  async puppeteerTest(page: ElementHandle): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    const image = await page.screenshot(screenShotOptions);

    expect(innerHtml).toMatchSnapshot();
    expect(image).toMatchImageSnapshot();
  },
};
