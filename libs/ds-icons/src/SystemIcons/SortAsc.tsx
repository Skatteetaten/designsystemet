import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SortAscSVGpath = (
  <path
    d={
      'M17 3v14h-3.001L18 21l3.999-4H19V3h-2ZM2 7h4V5H2v2Zm0 6h7v-2H2v2Zm0 6h10v-2H2v2Z'
    }
  />
);

export function SortAscIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SortAscSVGpath} />;
}
