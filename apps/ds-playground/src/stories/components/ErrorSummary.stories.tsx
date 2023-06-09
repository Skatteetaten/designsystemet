import { headingAsArr } from '@skatteetaten/ds-core-utils';
import {
  ErrorMessage,
  ErrorSummary,
  ErrorSummaryProps,
  getErrorSummaryTitleAsDefault,
} from '@skatteetaten/ds-forms';
import { Meta, Story } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: ErrorSummary,
  title: 'Komponenter/ErrorSummary',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    content: { table: { category: category.props } },
    shadowRootNode: { table: { control: false, category: category.props } },
    showErrorSummary: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
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
  parameters: {
    version: getVersion('ds-forms'),
  },
} as Meta<ErrorSummaryProps>;

const TemplateDefault: Story<ErrorSummaryProps> = (args) => (
  <ErrorSummary {...args}>
    <ErrorSummary.Error referenceId={'id1'}>
      {'Husk å fylle ut type varer'}
    </ErrorSummary.Error>
    <ErrorSummary.Error referenceId={'id2'}>
      {'Selger du varer og tjenester for egen regning?'}
    </ErrorSummary.Error>
  </ErrorSummary>
);

const TemplateExample: Story<ErrorSummaryProps> = () => {
  return (
    <>
      {/* TODO FRONT-1279 erstattes med TextField når den er ferdig utviklet */}
      <label className={'block'} htmlFor={'input_aar'}>
        {'År'}
      </label>
      <input id={'input_aar'} type={'number'} value={1009} />
      <ErrorMessage showError>{'Inntekståret må være etter 2008'}</ErrorMessage>
      <label className={'block'} htmlFor={'input_epost'}>
        {'E-post'}
      </label>
      <input id={'input_epost'} type={'email'} value={'Ola.Normann.no'} />
      <ErrorMessage showError>
        {'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'}
      </ErrorMessage>
      <label className={'block'} htmlFor={'input_dager'}>
        {'Antall dager i Norge i perioden/inntekståret'}
      </label>
      <input id={'input_dager'} type={'number'} />
      <ErrorMessage className={'bottomSpacingXL'} showError>
        {'Antall dager må fylles ut.'}
      </ErrorMessage>
      <ErrorSummary showErrorSummary>
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
    </>
  );
};

export const ErrorSummaryDefault: Story<ErrorSummaryProps> =
  TemplateDefault.bind({});
export const ErrorSummaryExample: Story<ErrorSummaryProps> =
  TemplateExample.bind({});
ErrorSummaryDefault.storyName = 'Default';
ErrorSummaryExample.storyName = 'Example';
ErrorSummaryExample.parameters = {
  controls: { disabled: true },
};

ErrorSummaryDefault.args = {
  showErrorSummary: true,
  content: 'Her kan du legge inn vilkårlig innhold',
  titleAs: getErrorSummaryTitleAsDefault(),
};
