import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BellSVGpath = (
  <path
    d={
      'M17.33 10.2V13.8H17.31L19.98 15.6V18.3H3.98V15.6L6.65 13.8V10.2C6.65 7.84 8.15 5.83 10.24 5.1C10.22 5 10.21 4.9 10.21 4.8C10.21 3.81 11.01 3 11.99 3C12.97 3 13.77 3.81 13.77 4.8C13.77 4.9 13.76 5 13.74 5.1C15.83 5.84 17.33 7.84 17.33 10.2ZM13.78 19.2C13.78 20.19 12.98 21 12 21C11.02 21 10.22 20.19 10.22 19.2H13.78Z'
    }
  />
);

export function BellIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BellSVGpath} />;
}
