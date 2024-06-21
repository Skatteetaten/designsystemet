import { useState, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { headingAsArr } from '@skatteetaten/ds-core-utils';
import {
  ErrorSummary,
  TextField,
  getErrorSummaryTitleAsDefault,
} from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: ErrorSummary,
  title: 'Komponenter/ErrorSummary/ErrorSummary',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    content: { control: 'text', table: { category: category.props } },
    shadowRootNode: {
      control: false,
      table: { control: false, category: category.props },
    },
    showErrorSummary: { table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getErrorSummaryTitleAsDefault() },
      },
    },
  },
  args: {
    showErrorSummary: true,
    content: 'Her kan du legge inn vilkårlig innhold.',
    children: [
      <ErrorSummary.Error key={'error1'} referenceId={'id1'}>
        {'Husk å fylle ut type varer'}
      </ErrorSummary.Error>,
      <ErrorSummary.Error key={'error2'} referenceId={'id2'}>
        {'Selger du varer og tjenester for egen regning?'}
      </ErrorSummary.Error>,
    ],
  },
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false,
    });
    return (
      <>
        <TextField
          id={'input_aar'}
          label={'År'}
          value={1009}
          errorMessage={'Inntekståret må være etter 2008'}
          required
        />
        <TextField
          id={'input_epost'}
          label={'E-post'}
          value={'Ola.Normann.no'}
          errorMessage={
            state.hasError
              ? 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'
              : undefined
          }
          required
        />
        <TextField
          className={'bottomSpacingXL'}
          id={'input_dager'}
          label={'Antall dager i Norge i perioden/inntekståret'}
          errorMessage={
            state.hasError ? 'Antall dager må fylles ut.' : undefined
          }
          required
        />
        <ErrorSummary id={'errorSummary1'} showErrorSummary={state.hasError}>
          <ErrorSummary.Error referenceId={'input_aar'}>
            {'Inntekståret må være etter 2008'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_epost'}>
            {'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_dager'}>
            {'Antall dager må fylles ut.'}
          </ErrorSummary.Error>
        </ErrorSummary>
        <Button
          className={'topSpacingXL'}
          onClick={(): void => {
            setState({ hasError: !state.hasError });
            setTimeout((): void => {
              const el = document.getElementById('errorSummary1');
              el?.focus();
            }, 0);
          }}
        >
          {'Send'}
        </Button>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
