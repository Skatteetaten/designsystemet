import { type ReactElement } from 'react';

import { WordInfo } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function WordInfoStandardExample(): ReactElement {
  return (
    <Paragraph>
      {'I designsysytemer støtter fra skjermbredder fra 320  '}
      <WordInfo>
        <WordInfo.Trigger>{'piksler'}</WordInfo.Trigger>
        <WordInfo.Content>
          {
            'En piksel er det minste enkelt-elementet (eller punktet) i et digitalt bilde på en skjerm. Tusenvis av disse små, fargede punktene settes sammen for å danne et komplett bilde'
          }
        </WordInfo.Content>
      </WordInfo>
      {' og oppover.'}
    </Paragraph>
  );
}
