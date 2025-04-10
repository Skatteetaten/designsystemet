import { Meta, StoryObj } from '@storybook/react';

import { Select } from '@skatteetaten/ds-forms';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Select.Option,
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    // HTML
    value: { control: 'text', table: { category: category.htmlAttribute } },
  },
  args: {
    children: 'Option 1',
  },
} satisfies Meta<typeof Select.Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
