import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const TimersandSVGpath = (
  <path
    d={
      'M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4V2Zm10 14.5-4-4-4 4V20h8v-3.5Zm-4-5 4-4V4H8v3.5l4 4ZM10 6h4v.75l-2 2-2-2V6Z'
    }
  />
);

export function TimersandIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={TimersandSVGpath} />;
}
