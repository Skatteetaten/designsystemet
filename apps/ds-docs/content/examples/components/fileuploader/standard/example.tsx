import { FileUploader } from '@skatteetaten/ds-forms';

export default function FileUploaderPreviewStateExample(): JSX.Element {
  return (
    <FileUploader
      label={'Last opp vedlegg'}
      acceptedFileFormats={['.pdf', '.jpg', '.png']}
      acceptedFileFormatsDisplay={'PDF, JPG eller PNG'}
    />
  );
}
