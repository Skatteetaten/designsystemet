import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupHorizontalExample(): ReactElement {
  const [svar, setSvar] = useState<string>('');

  return (
    <RadioGroup
      variant={'horizontal'}
      legend={'Har du sendt inn skattemeldingen?'}
      value={svar}
      required
      onChange={(e): void => setSvar(e.target.value)}
    >
      <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
