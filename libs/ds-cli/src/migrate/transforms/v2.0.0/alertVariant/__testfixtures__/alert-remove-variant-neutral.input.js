import { Alert } from '@skatteetaten/ds-status';

export default function Component() {
  return (
    <Alert variant={'neutral'} showAlert>
      {
        'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
      }
    </Alert>
  );
}
