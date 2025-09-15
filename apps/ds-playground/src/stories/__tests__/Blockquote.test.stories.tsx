import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Blockquote, BlockquoteProps } from '@skatteetaten/ds-typography';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: Blockquote,
  title: 'Tester/Blockquote',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    canBeManuallyFocused: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'text',
    },
    hasSpacing: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
    imageSnapshot: { disableSnapshot: true },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
} satisfies Story;

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
      control: { disable: true },
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

export const WithCanBeManuallyFocused: Story = {
  name: 'With Can Receive Focus',
  render: (args) => <Blockquote {...args}>{'Litt fylltekst'}</Blockquote>,
  args: {
    ...defaultArgs,
    canBeManuallyFocused: true,
  },
  argTypes: {
    canBeManuallyFocused: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText('Litt fylltekst');
    blockquote.focus();
    await expect(blockquote).toBeInTheDocument();
    await expect(blockquote).toHaveFocus();
    await expect(blockquote).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;

const TemplateAllColors: StoryFn<BlockquoteProps> = (args) => (
  <>
    <Blockquote {...args} borderColor={'forest'} hasSpacing />
    <Blockquote {...args} borderColor={'ochre'} hasSpacing />
    <Blockquote {...args} borderColor={'graphite'} hasSpacing />
    <Blockquote {...args} borderColor={'denim'} hasSpacing />
  </>
);

export const WithColors = {
  render: TemplateAllColors,
  name: 'With All Colors (A3, A4)',
  args: {
    ...defaultArgs,
  },
} satisfies Story;
