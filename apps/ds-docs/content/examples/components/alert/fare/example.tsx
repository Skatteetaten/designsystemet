import { Alert } from '@skatteetaten/ds-status';

export default function AlertDangerStateExample(): JSX.Element {
  return (
    <Alert variant={'danger'} showAlert>
      {'Strengt fortrolig (Kode 6)'}
    </Alert>
  );
}
