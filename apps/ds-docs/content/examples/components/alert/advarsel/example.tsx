import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';

export default function AlertWarningStateExample(): JSX.Element {
  return (
    <Alert variant={'warning'} showAlert>
      {'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige'}
      {'konsekvenser.'}
    </Alert>
  );
}
