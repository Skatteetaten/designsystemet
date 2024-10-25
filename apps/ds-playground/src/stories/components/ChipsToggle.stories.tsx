import {
  Chips,
  getChipsToggleDefaultShowCheckmark,
  getChipsToggleDefaultIsSelected,
  getChipDefaultSize,
} from '@skatteetaten/ds-collections';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Chips.Toggle,
  title: 'Komponenter/Chips/Toggle',
  argTypes: {
    // Props
    size: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getChipDefaultSize() },
      },
    },
    isSelected: {
      control: 'boolean',
      table: {
        category: category.props,
        defaultValue: { summary: getChipsToggleDefaultIsSelected().toString() },
      },
    },
    showCheckmark: {
      control: 'boolean',
      table: {
        category: category.props,
        defaultValue: {
          summary: getChipsToggleDefaultShowCheckmark().toString(),
        },
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
    onClick: { table: { category: category.event } },
  },
  args: {
    children: 'Trondheim',
  },
} satisfies Meta<typeof Chips.Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
