import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@skatteetaten/ds-buttons';
import { ErrorMessage, TextField } from '@skatteetaten/ds-forms';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: ErrorMessage,
  title: 'Komponenter/ErrorMessage',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    showError: { table: { category: category.props } },
  },
  args: {
    children: 'Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ',
    showError: true,
  },
} satisfies Meta<typeof ErrorMessage>;

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
          className={'bottomSpacingXL'}
          label={'Fødselsdato'}
          value={'17.5.19'}
          errorMessage={'Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ'}
        />
        <Button
          variant={'secondary'}
          onClick={(): void => setState({ hasError: !state.hasError })}
        >
          {'Neste'}
        </Button>
        <ErrorMessage showError={state.hasError}>
          {'Skjemaet inneholder tre feil som må rettes før du kan gå videre.'}
        </ErrorMessage>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
