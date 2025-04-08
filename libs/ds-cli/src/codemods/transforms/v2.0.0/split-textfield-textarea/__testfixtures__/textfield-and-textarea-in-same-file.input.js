import { TextField } from '@skatteetaten/ds-forms';

export default function Component() {
  return (
    <>
      <TextField as={'input'} label={'Label'} />
      <TextField as={'textarea'} label={'Label'} />
    </>
  );
}
