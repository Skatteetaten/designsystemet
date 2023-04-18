import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { ErrorMessage, ErrorMessageProps } from '@skatteetaten/ds-forms';
import { Meta, Story } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

export default {
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
} as Meta<ErrorMessageProps>;

const TemplateDefault: Story<ErrorMessageProps> = (args) => (
  <ErrorMessage {...args} />
);

const TemplateExample: Story<ErrorMessageProps> = () => {
  const [state, setState] = useState({
    hasError: false,
  });
  return (
    <>
      {/* TODO FRONT-1279 erstattes med TextField når den er ferdig utviklet */}
      <label className={'block'} htmlFor={'fdato'}>
        {'Fødseldato'}
      </label>
      <input
        id={'fdato'}
        type={'text'}
        aria-describedby={'fdato-error'}
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

export const ErrorMessageDefault: Story<ErrorMessageProps> =
  TemplateDefault.bind({});
export const ErrorMessageExample: Story<ErrorMessageProps> =
  TemplateExample.bind({});
ErrorMessageDefault.storyName = 'Default';
ErrorMessageExample.storyName = 'Example';
ErrorMessageExample.parameters = {
  controls: { hideNoControlsWarning: true },
};

ErrorMessageDefault.args = {
  children: 'Feilmelding',
  showError: true,
};
