import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowBackSVGpath = (
  <path
    d={
      'M22.3 10.8v1.8H5.5l5.2 5.1L9.3 19l-7.5-7.3 7.7-7.3 1.4 1.3-5.2 5.1h16.6Z'
    }
  />
);

export function ArrowBackIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowBackSVGpath} />;
}
