import { type ReactElement } from 'react';

import { ScrollToTopButton } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function ScrollToTopButtonStandardExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'ScrollToTopButton er ment å dukke opp til nede til høyre når man scroller nedover på en side. Her er den synlig hele tiden siden visibilityThreshold er satt til 0.'
        }
      </Paragraph>

      <ScrollToTopButton visibilityThreshold={0} />
    </>
  );
}
