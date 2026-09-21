import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertWarningStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Denne advarselen er synlig når siden lastes, og har derfor fått overstyrt aria-live="off" .'
        }
      </Paragraph>
      <Alert variant={'warning'} ariaLive={'off'} showAlert>
        {
          'Hvis du henter frem skatteopplysninger for en person, blir det synlig for denne personen.'
        }
      </Alert>
    </>
  );
}
