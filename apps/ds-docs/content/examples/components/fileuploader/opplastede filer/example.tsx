import { JSX } from 'react';

import { FileUploader } from '@skatteetaten/ds-forms';

const uploadedFiles = [
  {
    id: 'vedlegg-1',
    name: 'kvittering.pdf',
    href: '#',
  },
  {
    id: 'vedlegg-2',
    name: 'avtale.jpg',
    href: '#',
  },
];

export default function FileUploaderWithUploadedFilesStateExample(): JSX.Element {
  return (
    <FileUploader
      label={'Last opp dokumentasjon'}
      acceptedFileFormats={['.pdf', '.jpg', '.png']}
      uploadedFiles={uploadedFiles}
    />
  );
}
