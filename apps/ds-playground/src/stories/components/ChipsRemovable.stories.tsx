import { Meta, StoryObj } from '@storybook/react-vite';

import { Chips } from '@skatteetaten/ds-collections';

import { category, htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: Chips.Removable,
  title: 'Komponenter/Chips/Removable',
  argTypes: {
    // Props
    size: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
    // Events
    onClose: { ...htmlEventDescription },
  },
  args: {
    children: 'Trondheim',
  },
} satisfies Meta<typeof Chips.Removable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
