import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

const options = [
  {
    label: 'Agdenes',
    value: 'agdenes',
  },
  {
    label: 'Balestrand',
    value: 'balestrand',
  },
  {
    label: 'Finnøy',
    value: 'finnoy',
  },
  {
    label: 'Forsand',
    value: 'forsand',
  },
  {
    label: 'Kvalsund',
    value: 'kvalsund',
  },
  {
    label: 'Mandal',
    value: 'mandal',
  },
  {
    label: 'Midsund',
    value: 'midsund',
  },
  {
    label: 'Rennesøy',
    value: 'rennesoy',
  },
  {
    label: 'Songdalen',
    value: 'songdalen',
  },
  {
    label: 'Tysfjord',
    value: 'tysfjord',
  },
];

const ComboboxMaxSelectedExample = (): JSX.Element => {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med maks antall valg satt til 3. Når brukeren har valgt 3 kommuner, vil de ikke kunne velge flere.'
        }
      </Paragraph>
      <Combobox
        name={'favoriteKommuner'}
        label={'Velg dine 3 favorittkommuner'}
        options={options}
        maxSelected={3}
        multiple
        hasSpacing
      />
    </>
  );
};

export default ComboboxMaxSelectedExample;
