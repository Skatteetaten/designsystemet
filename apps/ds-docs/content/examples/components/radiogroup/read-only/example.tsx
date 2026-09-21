import { type ReactElement } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupReadOnlyExample(): ReactElement {
  return (
    <RadioGroup
      legend={'Type virksomhet'}
      value={'selskap'}
      readOnly
      onChange={(): void => undefined}
    >
      <RadioGroup.Radio value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
