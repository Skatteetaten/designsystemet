import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowForwardSVGpath = (
  <path
    d={
      'M14.14 20.5L21 12.5L14.14 4.5L12.2 6.17L16.55 11.25L3 11.25V13.75L16.55 13.75L12.2 18.83L14.14 20.5Z'
    }
  />
);

export function ArrowForwardIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowForwardSVGpath} />;
}
