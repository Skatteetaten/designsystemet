import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronDownSVGpath = (
  <path
    d={
      'M18.1 7.98001L12 14.08L5.9 7.98001L4 9.88L12 17.88L20 9.88L18.1 7.98001Z'
    }
  />
);

export function ChevronDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronDownSVGpath} />;
}
