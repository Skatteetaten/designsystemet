import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertErrorStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Vi antar at feil vises dynamisk og får aria-live="polite" som standard:'
        }
      </Paragraph>
      <Alert variant={'error'} showAlert>
        {'Avvist av kortutsteder.'}
      </Alert>
    </>
  );
}
