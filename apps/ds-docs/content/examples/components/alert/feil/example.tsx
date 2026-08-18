import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';

export default function AlertErrorStateExample(): JSX.Element {
  return (
    <Alert variant={'error'} showAlert>
      {'Avvist av kortutsteder.'}
    </Alert>
  );
}
