import { Meta, StoryObj } from '@storybook/react';

import { List } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';

const meta = {
  // TODO - Hide story from storybook
  component: List.Element,
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
} satisfies Meta<typeof List.Element>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
