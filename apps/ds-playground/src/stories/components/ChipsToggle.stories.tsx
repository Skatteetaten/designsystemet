import {
  Chips,
  getChipsToggleDefaultShowCheckmark,
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
        //defaultValue: { summary: getChipDefaultSize() },
      },
    },
    isSelected: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    showCheckmark: {
      control: 'boolean',
      table: {
        category: category.props,
        summary: { defaultValue: getChipsToggleDefaultShowCheckmark() },
      },
    },
    children: { control: false, table: { category: category.props } },
  },
  args: {
    children: 'Trondheim',
  },
} satisfies Meta<typeof Chips.Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
