import { ErrorSummary } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: ErrorSummary.Error,
  title: 'Komponenter/ErrorSummary/Error',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    referenceId: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof ErrorSummary.Error>;

export const Preview = {
  args: {
    children: 'Husk å fylle ut type varer',
    referenceId: 'id1',
  },
} satisfies StoryObj<typeof ErrorSummary.Error>;
