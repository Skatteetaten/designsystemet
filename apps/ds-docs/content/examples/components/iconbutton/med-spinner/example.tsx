import { useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

export default function IconButtonWithSpinnerStateExample(): JSX.Element {
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
    <IconButton
      svgPath={PrintSVGpath}
      title={'Skriv ut'}
      hasSpinner={isLoading}
      spinnerTitle={'Laster inn...'}
      onClick={handleClick}
    />
  );
}
