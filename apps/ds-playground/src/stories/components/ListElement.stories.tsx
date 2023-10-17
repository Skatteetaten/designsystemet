import { List } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: List.Element,
  title: 'Komponenter/List/Element',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof List.Element>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  name: 'Default',
  args: {
    children: 'Kjenner du behovet til brukeren?',
  },
} satisfies Story;
