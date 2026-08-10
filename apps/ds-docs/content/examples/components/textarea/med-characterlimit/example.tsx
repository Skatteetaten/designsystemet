import { type ChangeEvent, type ReactElement, useState } from 'react';

import { TextArea } from '@skatteetaten/ds-forms';

export default function TextAreaWithCharacterLimitExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  return (
    <TextArea
      label={'Begrunnelse'}
      helpText={'Maks 200 tegn.'}
      characterLimit={200}
      rows={4}
      value={value}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
    />
  );
}
