import { useState, JSX } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';

export default function MegaButtonWithSpinnerStateExample(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <MegaButton
      type={'button'}
      hasSpinner={isLoading}
      spinnerTitle={'Laster tjeneste'}
      onClick={handleClick}
    >
      {'Se eller endre skattekortet'}
    </MegaButton>
  );
}
