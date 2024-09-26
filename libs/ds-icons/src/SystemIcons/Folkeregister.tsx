import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FolkeregisterSVGpath = (
  <path
    d={
      'M19.95,4H3.64c-.89.03-1.6.71-1.64,1.56v10.93c.03.85.74,1.53,1.63,1.56h11.22c-.05-.27-.09-.55-.09-.83,0-2.23,1.87-4.03,4.17-4.03,1,0,1.92.35,2.63.94V5.56c-.03-.85-.73-1.53-1.61-1.56ZM8.9,7.12c1.16,0,2.1.91,2.1,2.02s-.95,2.04-2.1,2.04-2.09-.92-2.09-2.04.94-2.02,2.09-2.02ZM13.09,15.23H4.71v-1.02c0-1.34,2.8-2.02,4.19-2.02s4.19.68,4.19,2.02v1.02ZM17,12.65h-3.35v-1.09h3.35v1.09ZM19.23,10.48h-5.58v-1.08h5.58v1.08ZM19.23,8.32h-5.58v-1.08h5.58v1.08ZM22,16.41l-2.39-2.27v1.3c-2.39.32-3.42,1.95-3.75,3.57.85-1.13,2.04-1.65,3.75-1.65v1.33l2.39-2.27Z'
    }
  />
);

export function FolkeregisterIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FolkeregisterSVGpath} />;
}
