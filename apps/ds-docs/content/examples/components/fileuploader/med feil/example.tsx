import { JSX } from 'react';

import { FileUploader } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function FileUploaderWithErrorStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {'Når opplasting ikke kan starte står feilmeldingen under feltet.'}
      </Paragraph>
      <FileUploader
        label={'Last opp dokumentasjon'}
        acceptedFileFormats={['.pdf']}
        errorMessage={
          'Du kan ikke laste opp filer av denne typen. Prøv et annet format.'
        }
      />
    </>
  );
}
