import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FacebookSVGpath = (
  <path
    d={
      'M12 2C6.5 2 2 6.49 2 12.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.81c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9C22 6.49 17.5 2 12 2Z'
    }
  />
);

export function FacebookIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FacebookSVGpath} />;
}
