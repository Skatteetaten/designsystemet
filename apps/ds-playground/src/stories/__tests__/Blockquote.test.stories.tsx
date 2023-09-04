import { Blockquote, BlockquoteProps } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';

const meta = {
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
} satisfies Meta<typeof Blockquote>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: loremIpsum,
};

export const WithRef = {
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: HTMLQuoteElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },

  argTypes: {
    ref: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText(loremIpsum);
    await expect(blockquote).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',

  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },

  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText(loremIpsum);
    await expect(blockquote).toHaveClass('dummyClassname');
    await expect(blockquote).toHaveAttribute('id', 'htmlId');
    await expect(blockquote).toHaveAttribute('lang', 'nb');
    await expect(blockquote).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B1)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    children: { table: { disable: false } },
  },
};

const TemplateWithMarkup: StoryFn<Exclude<BlockquoteProps, 'children'>> = (
  args
) => (
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
);

export const WithMarkup = {
  render: TemplateWithMarkup,
  name: 'With Markup (A2, B1)',

  argTypes: {
    children: {
      table: { disable: false },
      control: { type: null },
    },
  },

  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > blockquote a`,
      focus: `${wrapper} > blockquote a`,
    },
  },
} satisfies Story;

const TemplateWithTwoBlockquotes: StoryFn<BlockquoteProps> = (args) => (
  <>
    <Blockquote {...args} />
    <Blockquote {...args} />
  </>
);

export const WithSpacing = {
  render: TemplateWithTwoBlockquotes,
  name: 'With Spacing (A3)',

  args: {
    ...defaultArgs,
    hasSpacing: true,
  },

  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;
