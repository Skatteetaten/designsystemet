import { useEffect, useState } from 'react';

import { StoryObj } from '@storybook/react';

import { formatter, useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default {
  title: 'Verktøy/Formatters',
};

const defaultArgs = {
  className: { table: { disable: true } },
  'data-testid': { table: { disable: true } },
  id: { table: { disable: true } },
  key: { table: { disable: true } },
  lang: { table: { disable: true } },
  ref: { table: { disable: true } },
};

export const Formatters: StoryObj = {
  argTypes: defaultArgs,
  render: function Render() {
    const phoneNumberFormatter = useFormattedInput({
      type: 'phoneNumber',
      initialValue: '12345678',
    });

    const organisationNumberFormatter = useFormattedInput({
      type: 'organisationNumber',
      initialValue: '974761076',
    });

    const nationalIdentityNumberFormatter = useFormattedInput({
      type: 'nationalIdentityNumber',
      initialValue: '26301518292',
    });

    const bankAccountNumberFormatter = useFormattedInput({
      type: 'bankAccountNumber',
      initialValue: '76940524802',
    });

    return (
      <>
        <TextField
          label={'Telefonnummer'}
          value={phoneNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={phoneNumberFormatter.onChange}
          onKeyDown={phoneNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Organisasjonsnummer (9 siffer)'}
          value={organisationNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={organisationNumberFormatter.onChange}
          onKeyDown={organisationNumberFormatter.onKeyDown}
        />

        <TextField
          label={'Fødselsnummer (11 siffer)'}
          value={nationalIdentityNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={nationalIdentityNumberFormatter.onChange}
          onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Kontonummer'}
          value={bankAccountNumberFormatter.value}
          className={'textField300'}
          onChange={bankAccountNumberFormatter.onChange}
          onKeyDown={bankAccountNumberFormatter.onKeyDown}
        />
      </>
    );
  },
};
