import { useEffect, useState } from 'react';

import { StoryObj } from '@storybook/react';

import { formatter } from '@skatteetaten/ds-core-utils';
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
    const [organisationNumberValue, setOrganisationNumberValue] = useState('');
    const [nationalidentitynumberValue, setNationalidentitynumberValue] =
      useState('');
    const [bankAccountNumberValue, setBankAccountNumberValue] = useState('');
    useEffect(() => {
      setNationalidentitynumberValue(
        formatter({ value: '26301518292', type: 'nationalIdentityNumber' })
          .value
      );
      setOrganisationNumberValue(
        formatter({
          value: '974 761 076',
          type: 'organisationNumber',
        }).value
      );
      setBankAccountNumberValue(
        formatter({ value: '7694 05 24802', type: 'bankAccountNumber' }).value
      );
    }, []);

    return (
      <>
        <TextField
          label={'Fødselsnummer (11 siffer)'}
          value={nationalidentitynumberValue}
          className={'textField300'}
          hasSpacing
          onChange={(e) =>
            setNationalidentitynumberValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'nationalIdentityNumber',
              }).value
            )
          }
        />

        <TextField
          label={'Organisasjonsnummer (9 siffer)'}
          value={organisationNumberValue}
          className={'textField300'}
          hasSpacing
          onChange={(e) =>
            setOrganisationNumberValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'organisationNumber',
              }).value
            )
          }
        />

        <TextField
          label={'Kontonummer'}
          value={bankAccountNumberValue}
          className={'textField300'}
          onChange={(e) =>
            setBankAccountNumberValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'bankAccountNumber',
              }).value
            )
          }
        />
      </>
    );
  },
};
