import { useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';

export default function InlineButtonWithSpinnerStateExample(): JSX.Element {
  const [isSaving, setIsSaving] = useState(false);

  const handleClick = (): void => {
    if (isSaving) {
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <InlineButton
      hasSpinner={isSaving}
      spinnerTitle={'Lagre melding...'}
      onClick={handleClick}
    >
      {'Lagre melding'}
    </InlineButton>
  );
}
