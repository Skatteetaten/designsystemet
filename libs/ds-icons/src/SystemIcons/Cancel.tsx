import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CancelSVGpath = (
  <path
    d={
      'M19 17.61L13.89 12.5L19 7.39L17.11 5.5L12 10.61L6.89 5.5L5 7.39L10.11 12.5L5 17.61L6.89 19.5L12 14.39L17.11 19.5L19 17.61Z'
    }
  />
);

export function CancelIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CancelSVGpath} />;
}
