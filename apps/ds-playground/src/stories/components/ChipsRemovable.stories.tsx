import { Meta, StoryObj } from '@storybook/react';

import { Chips, getChipDefaultSize } from '@skatteetaten/ds-collections';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Chips.Removable,
  title: 'Komponenter/Chips/Removable',
  argTypes: {
    // Props
    size: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getChipDefaultSize() },
      },
    },
    children: { control: false, table: { category: category.props } },
    // HTML
    disabled: {
      table: {
        category: category.htmlAttribute,
      },
    },
    // Events
    onClose: { control: false, table: { category: category.event } },
  },
  args: {
    children: 'Trondheim',
  },
} satisfies Meta<typeof Chips.Removable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
