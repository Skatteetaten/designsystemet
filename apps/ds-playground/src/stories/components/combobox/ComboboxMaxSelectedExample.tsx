import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { getComboboxStoryOptions } from './combobox.stories.utils';

export const ComboboxMaxSelectedExample = (): JSX.Element => {
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
        options={getComboboxStoryOptions()}
        maxSelected={3}
        multiple
        hasSpacing
      />
    </>
  );
};
