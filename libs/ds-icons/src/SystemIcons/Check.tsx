import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CheckSVGpath = (
  <path
    d={
      'M19.94 6.71L19.24 6L9 16.23L5.26 12.5L4.91 12.85L3.5 14.26L9 19.76L21 7.76L19.94 6.71Z'
    }
  />
);

export function CheckIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CheckSVGpath} />;
}
