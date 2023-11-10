import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PersonSVGpath = (
  <path
    d={
      'M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z'
    }
  />
);

export function PersonIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PersonSVGpath} />;
}
