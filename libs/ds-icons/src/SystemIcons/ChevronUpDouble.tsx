import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronUpDoubleSVGpath = (
  <path
    fillRule={'evenodd'}
    d={
      'M5.66 19.5 4 17.55l8-6.85 8 6.85-1.67 1.95-5.08-4.36L12 14.07l-1.25 1.07zM12 6.87l-1.25 1.07-5.09 4.36L4 10.35l8-6.85 8 6.85-1.67 1.95-5.08-4.36z'
    }
    clipRule={'evenodd'}
  />
);

export function ChevronUpDoubleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChevronUpDoubleSVGpath} />;
}
