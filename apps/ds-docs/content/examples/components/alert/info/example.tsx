import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertInfoStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Denne beskjeden er synlig på siden når siden lastes og overstyres derfor med aria-live="off". '
        }
      </Paragraph>
      <Alert variant={'info'} ariaLive={'off'} showAlert>
        {
          'Vi jobber med å utvikle denne siden, og du vil kunne se flere av sakene dine etter hvert.'
        }
      </Alert>
    </>
  );
}
