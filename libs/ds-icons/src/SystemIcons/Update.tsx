import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const UpdateSVGpath = (
  <path
    d={
      'M19.35,11.76c-.06-2.09-.92-4.11-2.39-5.59-1.54-1.56-3.59-2.42-5.77-2.42s-4.24.86-5.8,2.43c-1.54,1.56-2.4,3.63-2.4,5.83,0,2.2.85,4.27,2.39,5.83,1.54,1.56,3.6,2.41,5.78,2.41,1.46,0,2.89-.4,4.15-1.14l.28-.16-1.81-1.82-.16.08c-.77.37-1.6.56-2.45.56-1.52,0-2.95-.6-4.03-1.68-2.22-2.24-2.22-5.9,0-8.14,1.08-1.08,2.51-1.68,4.03-1.68s2.95.6,4.03,1.68c1.01,1.01,1.61,2.39,1.64,3.83h-4.86l5.51,5.56,5.51-5.56h-3.65Z'
    }
  />
);

export function UpdateIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={UpdateSVGpath} />;
}
