import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronLeftDoubleSVGpath = (
  <path
    fillRule={'evenodd'}
    d={
      'M19 18.34 17.05 20l-6.85-8 6.85-8L19 5.67l-4.36 5.08L13.57 12l1.07 1.25zM6.37 12l1.07 1.25 4.36 5.09L9.85 20 3 12l6.85-8 1.95 1.67-4.36 5.08z'
    }
    clipRule={'evenodd'}
  />
);

export function ChevronLeftDoubleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChevronLeftDoubleSVGpath} />;
}
