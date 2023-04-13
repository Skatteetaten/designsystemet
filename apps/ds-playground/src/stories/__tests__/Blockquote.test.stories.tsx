import { Blockquote, BlockquoteProps } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(loremIpsum)).toHaveAttribute(
      attribute,
      expectedValue
    );
  };

export default {
  component: Blockquote,
  title: 'Tester/Blockquote',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    hasSpacing: { table: { disable: true } },
  },
} as ComponentMeta<typeof Blockquote>;

const defaultArgs: BlockquoteProps = {
  children: loremIpsum,
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
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når Blockquote har en id, så har element id
// Når Blockquote har en custom CSS, så vises custom stil
// Når Blockquote har en lang, så har element lang
// Når Blockquote har dataTestid, så har elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const blockquote = canvas.getByText(loremIpsum);
  await expect(blockquote).toHaveClass('dummyClassname');
  await expect(blockquote).toHaveAttribute('id', 'htmlId');
  await expect(blockquote).toHaveAttribute('lang', 'nb');
  await expect(blockquote).toHaveAttribute('data-testid', '123ID');
};

// Når Blockquote instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
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
WithMarkup.storyName = 'With Markup (A2, B1)';
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > blockquote a`,
    focus: `${wrapper} > blockquote a`,
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
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};
