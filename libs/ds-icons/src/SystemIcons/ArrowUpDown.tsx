import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowUpDownSVGpath = (
  <path
    d={
      'M7 4L12 8.95937L10.6364 10.2719L7.96364 7.61875V20H6.03636V7.61875L3.36364 10.2719L2 8.95937L7 4ZM17 21L12 16.0406L13.3636 14.7281L16.0364 17.3813V5H17.9636V17.3813L20.6364 14.7281L22 16.0406L17 21Z'
    }
    fillRule={'evenodd'}
    clipRule={'evenodd'}
  />
);

export function ArrowUpDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowUpDownSVGpath} />;
}
