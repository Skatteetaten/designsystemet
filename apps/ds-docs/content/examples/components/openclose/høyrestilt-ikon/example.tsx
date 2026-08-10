import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseRightIconExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom.'
        }
      </Paragraph>
      <OpenClose title={'Hva er aksjesparekonto'} iconPosition={'right'}>
        <Paragraph>
          {
            'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen.'
          }
        </Paragraph>
      </OpenClose>
    </>
  );
}
