import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronRightDoubleSVGpath = (
  <path
    fillRule={'evenodd'}
    d={
      'M5 5.66 6.95 4l6.85 8-6.85 8L5 18.33l4.36-5.08L10.43 12l-1.07-1.25zM17.63 12l-1.07-1.25-4.36-5.09L14.15 4 21 12l-6.85 8-1.95-1.67 4.36-5.08z'
    }
    clipRule={'evenodd'}
  />
);

export function ChevronRightDoubleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChevronRightDoubleSVGpath} />;
}
