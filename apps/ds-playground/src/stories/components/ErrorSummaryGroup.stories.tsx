import { Meta, StoryObj } from '@storybook/react-vite';

import {
  ErrorSummary,
  getErrorSummaryGroupTitleAsDefault,
} from '@skatteetaten/ds-forms';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: ErrorSummary.Group,
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getErrorSummaryGroupTitleAsDefault() },
      },
    },
  },
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: [
      <ErrorSummary.Error key={'error1'} referenceId={'navn1'}>
        {'Navn på person må fylles ut'}
      </ErrorSummary.Error>,
      <ErrorSummary.Error key={'error2'} referenceId={'fnummer1'}>
        {'Fødselsnummer eller D-nummer må fylles ut'}
      </ErrorSummary.Error>,
      <ErrorSummary.Error key={'error3'} referenceId={'telefon1'}>
        {'Telefonnummer må fylles ut'}
      </ErrorSummary.Error>,
    ],
  },
} satisfies Meta<typeof ErrorSummary.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
