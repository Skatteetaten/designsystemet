import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CashDownSVGpath = (
  <path
    d={
      'M12.75 20.6201L15.1797 18.2002L16.25 19.2598L12 23.5L7.75 19.2598L8.82031 18.2002L11.25 20.6201V15.5H12.75V20.6201ZM21 14H3V2H21V14ZM7 4C7 5.11 6.1 6 5 6V10C6.1 10 7 10.9 7 12H17C17 10.9 17.9 10 19 10V6C17.9 6 17 5.11 17 4H7ZM12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6Z'
    }
    fill={'black'}
  />
);

export function CashDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CashDownSVGpath} />;
}
