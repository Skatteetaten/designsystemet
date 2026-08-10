import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';

export default function AlertSuccessStateExample(): JSX.Element {
  return (
    <Alert variant={'success'} showAlert>
      {'Filen ble lastet opp.'}
    </Alert>
  );
}
