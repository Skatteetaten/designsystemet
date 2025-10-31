import { TextField, TextArea } from '@skatteetaten/ds-forms';

export default function Component() {
  return (
    <>
      <TextArea label={'Message'} placeholder={'Write your message...'} />
      <TextField label={'Name'} placeholder={'Enter your name'} />
    </>
  );
}
