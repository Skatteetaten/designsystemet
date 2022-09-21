import * as React from 'react';

import Icon from '../Icon';
import { IconProps } from '../Icon/icon.types';

export const AccountChildSVGpath = (
  <path
    d={
      'M12.5 11a2 2 0 1 0-.09 3.998A2 2 0 0 0 12.5 11Zm0-2c1.63 0 3.12.35 4.5 1.05 1.34.71 2 1.56 2 2.56v5.77c0 1.12-.86 2.06-2.61 2.81V19c0-.95-.86-1.62-2.58-2.03-.56-.13-1-.19-1.31-.19-.87 0-1.7.17-2.46.52-.77.34-1.23.78-1.38 1.31 1.34.53 2.62.8 3.84.8l1-.1v2.63l-1 .06a9.68 9.68 0 0 1-3.89-.81C6.86 20.44 6 19.5 6 18.38v-5.77c0-1 .66-1.85 2-2.56C9.38 9.35 10.88 9 12.5 9Zm0-7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z'
    }
  />
);

export function AccountChildIcon(props: IconProps): JSX.Element {
  return <Icon {...props} svgPath={AccountChildSVGpath} />;
}
