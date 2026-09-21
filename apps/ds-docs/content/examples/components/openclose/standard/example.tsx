import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseStandardExample(): ReactElement {
  return (
    <OpenClose title={'Hva er aksjesparekonto?'}>
      <Paragraph>
        {
          'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen.'
        }
      </Paragraph>
    </OpenClose>
  );
}
