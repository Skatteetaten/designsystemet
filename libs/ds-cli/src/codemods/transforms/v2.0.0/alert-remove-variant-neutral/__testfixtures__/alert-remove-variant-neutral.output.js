import { Alert } from '@skatteetaten/ds-status';

export default function Component() {
  return (
    <Alert variant={'info'} showAlert>
      {
        'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
      }
    </Alert>
  );
}
