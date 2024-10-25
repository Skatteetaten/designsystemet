import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowBackSVGpath = (
  <path
    d={
      'M9.86 4.5L3 12.5L9.86 20.5L11.8 18.83L7.45 13.75H21V11.25L7.45 11.25L11.8 6.17L9.86 4.5Z'
    }
  />
);

export function ArrowBackIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowBackSVGpath} />;
}
