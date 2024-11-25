import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronDownDoubleSVGpath = (
  <path
    fillRule={'evenodd'}
    d={
      'M18.34 5.5 20 7.45l-8 6.85-8-6.85L5.67 5.5l5.08 4.36L12 10.93l1.25-1.07zM12 18.13l1.25-1.07 5.09-4.36L20 14.65l-8 6.85-8-6.85 1.67-1.95 5.08 4.36z'
    }
    clipRule={'evenodd'}
  />
);

export function ChevronDownDoubleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChevronDownDoubleSVGpath} />;
}
