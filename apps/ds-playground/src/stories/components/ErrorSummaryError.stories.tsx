import { Meta, StoryObj } from '@storybook/react';

import { ErrorSummary } from '@skatteetaten/ds-forms';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: ErrorSummary.Error,
  title: 'Komponenter/ErrorSummary/Error',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    referenceId: { table: { category: category.props } },
  },
  args: {
    children: 'Husk å fylle ut type varer',
    referenceId: 'id1',
  },
} satisfies Meta<typeof ErrorSummary.Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
