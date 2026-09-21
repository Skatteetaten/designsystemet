import { type ChangeEvent, type ReactElement, useState } from 'react';

import { TextArea } from '@skatteetaten/ds-forms';

export default function TextAreaStandardExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  return (
    <TextArea
      label={'Andre opplysninger'}
      rows={4}
      value={value}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
    />
  );
}
