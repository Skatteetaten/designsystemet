import { type JSX, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function MutuallyExclusiveGroupsExample(): JSX.Element {
  const [contactMethod, setContactMethod] = useState<string>('email');

  return (
    <RadioGroup
      legend={'Jeg ønsker å bli kontaktet på'}
      value={contactMethod}
      variant={'horizontal'}
      onChange={(e): void => setContactMethod(e.target.value)}
    >
      <RadioGroup.Radio value={'email'}>{'E-post'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'phone'}>{'Telefon'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'sms'}>{'SMS'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
