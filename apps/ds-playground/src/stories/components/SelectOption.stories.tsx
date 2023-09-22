import { Select } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Select.SelectOption,
  title: 'Komponenter/Select/SelectOption',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    // HTML
    value: { table: { category: category.htmlAttribute } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select.SelectOption>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SelectOptionDefault = {
  name: 'Default',
  args: {
    children: 'Option 1',
  },
} satisfies Story;
