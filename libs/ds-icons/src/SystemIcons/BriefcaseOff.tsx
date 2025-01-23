import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BriefcaseOffSVGpath = (
  <path
    d={
      'M21,8.5v9c0,1.1-.9,2-2,2H7.9l12.7-12.2c.3.3.4.7.4,1.2Z M21.6,3.7l-.4-.4-1-1-4.2,4v-1.8c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2h-3c-1.1,0-2,.9-2,2v9c0,.4.1.7.3,1l-1.9,1.8,1.4,1.4h0S21.6,3.7,21.6,3.7ZM10,4.5h4v2h-4v-2Z'
    }
  />
);

export function BriefcaseOffIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BriefcaseOffSVGpath} />;
}
