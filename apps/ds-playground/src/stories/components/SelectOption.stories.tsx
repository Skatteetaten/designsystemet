import { Select } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Select.Option,
  title: 'Komponenter/Select/Option',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    // HTML
    value: { control: 'text', table: { category: category.htmlAttribute } },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select.Option>;

export const Preview = {
  args: {
    children: 'Option 1',
  },
} satisfies StoryObj<typeof Select.Option>;
