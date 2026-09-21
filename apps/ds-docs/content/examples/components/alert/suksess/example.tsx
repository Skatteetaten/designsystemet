import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertSuccessStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Dynamiske varsler får aria-live="polite" som standard når de ikke er kritiske.'
        }
      </Paragraph>
      <Alert variant={'success'} ariaLive={'polite'} showAlert>
        {'Filen ble lastet opp'}
      </Alert>
    </>
  );
}
