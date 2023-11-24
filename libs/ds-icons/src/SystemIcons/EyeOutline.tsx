import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const EyeOutlineSVGpath = (
  <path
    d={
      'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5ZM3.18 12a9.822 9.822 0 0 0 17.64 0 9.821 9.821 0 0 0-17.64 0Z'
    }
  />
);

export function EyeOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={EyeOutlineSVGpath} />;
}
