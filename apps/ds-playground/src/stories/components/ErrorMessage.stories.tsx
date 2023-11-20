import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { ErrorMessage, TextField } from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: ErrorMessage,
  title: 'Komponenter/ErrorMessage',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    showError: {
      table: {
        category: category.props,
      },
    },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof ErrorMessage>;

export const Preview: StoryObj<typeof ErrorMessage> = {
  args: {
    children: 'Feilmelding',
    showError: true,
  },
};

export const Example: StoryFn<typeof ErrorMessage> = (_args) => {
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
        hasError
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
};

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};

export const ExampleSource: StoryFn<typeof ErrorMessage> = () => {
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
        hasError
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
};

ExampleSource.tags = ['isHidden'];

ExampleSource.parameters = {
  controls: {
    exclude: /.*/,
  },
};
