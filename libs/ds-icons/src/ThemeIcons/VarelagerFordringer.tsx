import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const VarelagerFordringerSVGpath = (
  <path
    d={
      'M30.67 4.97h-24v5.33h24V4.97Zm-1.33 6.68v9.45h13.07v23.55l-5-2.51-4 2-4-2-4 2-5-2.5V29H8V11.65h21.34Zm-14.619 4.405a.66.66 0 0 0-.051.255v2h8v-2a.66.66 0 0 0-.67-.66h-6.66a.662.662 0 0 0-.619.405ZM37.33 39.91l3 1.5V23.1h-18v17.31l3 1.5 4-2 4 2 4-2Zm.35-13.94H25.22v2h12.46v-2Zm0 4.5H25.22v2h12.46v-2Zm0 4.5H25.22v2h12.46v-2Z'
    }
  />
);

export function VarelagerFordringerIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={VarelagerFordringerSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
