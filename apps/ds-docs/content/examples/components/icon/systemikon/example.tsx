import { type ReactElement } from 'react';

import {
  CopySVGpath,
  CalculatorSVGpath,
  CheckSVGpath,
  EmailSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function IconSystemVariantStateExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {'Systemikoner er vanlige og enkle ikoner som brukes på ulike steder:'}
      </Paragraph>
      <Icon svgPath={CopySVGpath} variant={'systemIcon'} />
      <Icon svgPath={CalculatorSVGpath} variant={'systemIcon'} />
      <Icon svgPath={CheckSVGpath} variant={'systemIcon'} />
      <Icon svgPath={EmailSVGpath} variant={'systemIcon'} />
    </>
  );
}
