import { Select } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Select.Option,
  title: 'Komponenter/Select/Option',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    // HTML
    value: { control: 'text', table: { category: category.htmlAttribute } },
  },
  args: {
    children: 'Option 1',
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select.Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
