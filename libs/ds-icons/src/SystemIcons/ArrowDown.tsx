import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowDownSVGpath = (
  <path
    d={
      'M4 14.64L12 21.5L20 14.64L18.33 12.7L13.25 17.05L13.25 3.5H10.75L10.75 17.05L5.67 12.7L4 14.64Z'
    }
  />
);

export function ArrowDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowDownSVGpath} />;
}
