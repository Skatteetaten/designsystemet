import { type JSX, useState } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { RadioGroup, TextField } from '@skatteetaten/ds-forms';

import styles from './MedRadioknapper.module.scss';

export default function MutuallyExclusiveGroupsExample(): JSX.Element {
  const [contactMethod, setContactMethod] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const phoneNumberFormatter = useFormattedInput({ type: 'phoneNumber' });

  return (
    <>
      <RadioGroup
        legend={'Jeg ønsker å bli kontaktet på'}
        value={contactMethod}
        hasSpacing
        onChange={(e): void => setContactMethod(e.target.value)}
      >
        <RadioGroup.Radio value={'email'}>{'E-post'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'phone'}>{'Telefon'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'sms'}>{'SMS'}</RadioGroup.Radio>
      </RadioGroup>
      {contactMethod === 'email' && (
        <TextField
          label={'E-postadresse'}
          value={email}
          inputMode={'email'}
          hideLabel={false}
          hasSpacing
          onChange={(event): void => setEmail(event.target.value)}
        />
      )}
      {contactMethod === 'phone' && (
        <RadioGroup
          legend={'Ønsket tidspunkt for oppringing'}
          value={timeSlot}
          hasSpacing
          onChange={(e): void => setTimeSlot(e.target.value)}
        >
          <RadioGroup.Radio value={'morning'}>
            {'Formiddag (9–12)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'afternoon'}>
            {'Ettermiddag (12–16)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'evening'}>
            {'Kveld (16–20)'}
          </RadioGroup.Radio>
        </RadioGroup>
      )}
      {contactMethod === 'sms' && (
        <TextField
          label={'Telefonnummer'}
          value={phoneNumberFormatter.value}
          inputMode={'numeric'}
          classNames={{ textbox: styles.phoneNumberInput }}
          hideLabel={false}
          hasSpacing
          onChange={phoneNumberFormatter.onChange}
          onKeyDown={phoneNumberFormatter.onKeyDown}
        />
      )}
    </>
  );
}
