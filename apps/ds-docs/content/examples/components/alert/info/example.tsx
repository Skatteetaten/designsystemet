import { Alert } from '@skatteetaten/ds-status';

export default function AlertInfoStateExample(): JSX.Element {
  return (
    <Alert variant={'info'} showAlert>
      {
        'Disse feltene er låst for redigering fordi du har fått et varsel fra oss.'
      }
    </Alert>
  );
}
