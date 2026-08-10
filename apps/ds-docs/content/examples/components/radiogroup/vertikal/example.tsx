import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupVerticalExample(): ReactElement {
  const [value, setValue] = useState<string>('skattemelding');

  return (
    <RadioGroup
      legend={'Hva trenger du hjelp til?'}
      value={value}
      onChange={(e): void => setValue(e.target.value)}
    >
      <RadioGroup.Radio value={'skattemelding'}>
        {'Levere eller endre skattemelding for privatperson'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'skattekort'}>
        {'Bestille, endre eller kontrollere skattekort'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'fradrag'}>
        {'Få oversikt over fradrag, dokumentasjon og satser'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'betaling'}>
        {'Betale restskatt eller søke om betalingsordning'}
      </RadioGroup.Radio>
    </RadioGroup>
  );
}
