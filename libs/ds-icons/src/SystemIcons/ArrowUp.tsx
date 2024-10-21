import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowUpSVGpath = (
  <path
    d={
      'M20 9.86L12 3L4 9.86L5.67 11.8L10.75 7.45V21H13.25V7.45L18.33 11.8L20 9.86Z'
    }
  />
);

export function ArrowUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowUpSVGpath} />;
}
