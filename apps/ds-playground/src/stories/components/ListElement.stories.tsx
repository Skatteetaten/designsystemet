import { List } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: List.Element,
  title: 'Komponenter/List/Element',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
  },
  args: {
    children: 'Kjenner du behovet til brukeren?',
  },
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof List.Element>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
