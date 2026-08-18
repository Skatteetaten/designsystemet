import { useState, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

export default function ButtonPrimarySpinnerStateExample(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (): void => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Button
      variant={'primary'}
      hasSpinner={isSubmitting}
      onClick={handleSubmit}
    >
      {'Send inn'}
    </Button>
  );
}
