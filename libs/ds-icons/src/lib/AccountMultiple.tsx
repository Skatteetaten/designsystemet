import * as React from 'react';

import Icon from './Icon';
import { IconProps } from './Icon/icon.types';

export const AccountMultipleSVGpath = (
  <path
    d={
      'M15.94 14c5.735.35 6.043 3.62 6.06 3.97V20h-4v-2a5.321 5.321 0 0 0-2.06-4ZM9 14c6.65 0 6.982 3.61 7 3.971V20H2v-2.029C2.019 17.61 2.35 14 9 14Zm6-9a3.5 3.5 0 1 1 0 7 3.39 3.39 0 0 1-1.93-.59 5.001 5.001 0 0 0 0-5.82A3.39 3.39 0 0 1 15 5ZM9 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z'
    }
  />
);

export default function AccountMultipleIcon(props: IconProps): JSX.Element {
  return <Icon {...props} svgPath={AccountMultipleSVGpath} />;
}
