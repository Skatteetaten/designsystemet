import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LogOutSVGpath = (
  <path
    d={
      'M14.1,15.6l2.6-2.6H7v-2h9.7l-2.6-2.6L15.5,7l5,5l-5,5L14.1,15.6 M19,3c1.1,0,2,0.9,2,2v4.7l-2-2V5H5v14h14v-2.7l2-2V19  c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19z'
    }
  />
);

export function LogOutIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LogOutSVGpath} />;
}
