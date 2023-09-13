import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  ErrorMessage,
  ErrorMessageProps,
  TextField,
} from '@skatteetaten/ds-forms';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: ErrorMessage,
  title: 'Komponenter/ErrorMessage',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    showError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof ErrorMessage>;
export default meta;

const TemplateExample: StoryFn<ErrorMessageProps> = () => {
  const [state, setState] = useState({
    hasError: false,
  });
  return (
    <>
      <TextField
        label={'Fødselsdato'}
        ariaDescribedby={'fdato-error'}
        value={'17.5.19'}
      />
      <ErrorMessage id={'fdato-error'} className={'bottomSpacingXL'} showError>
        {'Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ'}
      </ErrorMessage>
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

type Story = StoryObj<typeof meta>;
export const ErrorMessageDefault = {
  name: 'Default',

  args: {
    children: 'Feilmelding',
    showError: true,
  },
} satisfies Story;

export const ErrorMessageExample = {
  render: TemplateExample,
  name: 'Example',
  //args: { children: ''},
  parameters: {
    controls: { disabled: true },
  },
} satisfies Story;
