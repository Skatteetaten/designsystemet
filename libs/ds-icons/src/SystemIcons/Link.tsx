import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LinkSVGpath = (
  <path
    d={
      'M6.27,17.73c-1.21-1.21-1.21-3.17,0-4.38l2.83-2.83-1.34-1.34-2.83,2.83c-1.95,1.95-1.95,5.12,0,7.07s5.12,1.95,7.07,0l2.83-2.83-1.34-1.34-2.83,2.83c-1.21,1.21-3.17,1.21-4.38,0M9.88,15.54l5.66-5.66-1.41-1.41-5.66,5.66,1.41,1.41M12,4.93l-2.83,2.83,1.34,1.34,2.83-2.83c1.21-1.21,3.17-1.21,4.38,0s1.21,3.17,0,4.38l-2.83,2.83,1.34,1.34,2.83-2.83c1.95-1.95,1.95-5.12,0-7.07s-5.12-1.95-7.07,0Z'
    }
  />
);

export function LinkIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LinkSVGpath} />;
}
