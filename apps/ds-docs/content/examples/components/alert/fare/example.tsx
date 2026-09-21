import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertDangerStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Dette varselet får aria-live="assertive" som standard, og er ment til kritiske situasjoner og tidssensitive meldinger. '
        }
      </Paragraph>
      <Alert variant={'danger'} ariaLive={'assertive'} showAlert>
        {'Strengt fortrolig (Kode 6)'}
      </Alert>
    </>
  );
}
