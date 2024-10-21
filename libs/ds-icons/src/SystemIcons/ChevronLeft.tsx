import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronLeftSVGpath = (
  <path
    d={
      'M15.9 17.98L9.8 11.88L15.9 5.78L14.1 3.88L6.1 11.88L14.1 19.88L15.9 17.98Z'
    }
  />
);

export function ChevronLeftIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronLeftSVGpath} />;
}
