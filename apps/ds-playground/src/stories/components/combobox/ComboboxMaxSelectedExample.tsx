import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

export const ComboboxMaxSelectedExample = (): JSX.Element => {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med maks antall valg satt til 3. Når brukeren har valgt 3 alternativer, vil de ikke kunne velge flere.'
        }
      </Paragraph>
      <Combobox
        name={'favoriteColors'}
        label={'Velg dine 3 favorittfarger'}
        variant={'large'}
        options={[
          { label: 'Rød', value: 'red' },
          { label: 'Blå', value: 'blue' },
          { label: 'Grønn', value: 'green' },
          { label: 'Gul', value: 'yellow' },
          { label: 'Lilla', value: 'purple' },
          { label: 'Rosa', value: 'pink' },
          { label: 'Oransje', value: 'orange' },
          { label: 'Turkis', value: 'turquoise' },
          { label: 'Brun', value: 'brown' },
          { label: 'Svart', value: 'black' },
        ]}
        maxSelected={3}
        multiple
        hasSpacing
      />
    </>
  );
};
