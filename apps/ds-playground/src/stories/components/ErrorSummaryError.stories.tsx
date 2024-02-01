import { ErrorSummary } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

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
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof ErrorSummary.Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
