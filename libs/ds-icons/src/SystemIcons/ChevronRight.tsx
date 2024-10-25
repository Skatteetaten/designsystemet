import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronRightSVGpath = (
  <path
    d={
      'M8.10001 5.80002L14.2 11.9L8.10001 18L10 19.9L18 11.9L10 3.90002L8.10001 5.80002Z'
    }
  />
);

export function ChevronRightIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronRightSVGpath} />;
}
