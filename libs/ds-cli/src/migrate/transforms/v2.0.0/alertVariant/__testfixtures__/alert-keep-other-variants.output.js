import { Alert } from '@skatteetaten/ds-status';

export default function Component() {
  return (
    <>
      <Alert variant={'success'}>{'Success message'}</Alert>
      <Alert variant={'danger'}>{'Error message'}</Alert>
      <Alert variant={'warning'}>{'Warning message'}</Alert>
      <Alert variant={'info'}>{'Info message'}</Alert>
    </>
  );
}
