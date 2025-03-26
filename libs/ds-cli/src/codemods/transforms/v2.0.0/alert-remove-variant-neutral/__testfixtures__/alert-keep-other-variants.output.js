import { Alert } from '@skatteetaten/ds-status';

export default function Component() {
  return (
    <div>
      <Alert variant={'warning'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
      <Alert variant={'success'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
      <Alert variant={'danger'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
      <Alert variant={'error'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
    </div>
  );
}
