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
          'Filtypen og filendelsen stemmer ikke overens, for eksempel kan en Word-fil ha filendelsen .pdf. Lagre filen på nytt i et støttet format og prøv igjen.'
        }
      />
    </>
  );
}
