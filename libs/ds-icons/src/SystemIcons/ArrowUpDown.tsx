import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowUpDownSVGpath = (
  <path
    d={
      'm7 1.9 5.6 5.8-1.1 1.2-3.6-3.8v17H6.1v-17L2.6 8.9 1.4 7.6 7 1.9Zm10.9 0v17l3.5-3.8 1.2 1.3-5.6 5.7-5.6-5.8 1.1-1.2 3.6 3.8v-17h1.8Z'
    }
  />
);

export function ArrowUpDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowUpDownSVGpath} />;
}
