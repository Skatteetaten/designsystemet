import { type ReactElement } from 'react';

import {
  GaveArvSVGpath,
  SkogfondSVGpath,
  SelskapDeltakerfastsettingSVGpath,
  CarRecycleSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function IconThemeVariantStateExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {'Temaikoner har en viss størrelse med plass til detaljer.'}
      </Paragraph>
      <Icon svgPath={GaveArvSVGpath} variant={'themeIcon'} />
      <Icon svgPath={SkogfondSVGpath} variant={'themeIcon'} />
      <Icon svgPath={SelskapDeltakerfastsettingSVGpath} variant={'themeIcon'} />
      <Icon svgPath={CarRecycleSVGpath} variant={'themeIcon'} />
    </>
  );
}
