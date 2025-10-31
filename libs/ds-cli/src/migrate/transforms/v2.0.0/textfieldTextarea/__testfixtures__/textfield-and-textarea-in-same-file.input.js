import { TextField } from '@skatteetaten/ds-forms';

export default function Component() {
  return (
    <>
      <TextField
        as={'textarea'}
        label={'Message'}
        placeholder={'Write your message...'}
      />
      <TextField label={'Name'} placeholder={'Enter your name'} />
    </>
  );
}
