import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupErrorExample(): ReactElement {
  const [svar, setSvar] = useState<string>('');
  const [svarError, setSvarError] = useState<string>(
    'Svar på om du har sendt inn skattemeldingen.'
  );

  return (
    <RadioGroup
      variant={'horizontal'}
      legend={'Har du sendt inn skattemeldingen?'}
      value={svar}
      errorMessage={svarError}
      required
      onChange={(e): void => {
        setSvar(e.target.value);
        setSvarError('');
      }}
    >
      <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
