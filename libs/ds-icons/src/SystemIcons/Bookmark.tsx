import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BookmarkSVGpath = (
  <path
    d={
      'M17.1429 4H7.85714C7.3646 4 6.89223 4.19901 6.54394 4.55324C6.19566 4.90748 6 5.38792 6 5.88889V21L12.5 18.1667L19 21V5.88889C19 5.38792 18.8043 4.90748 18.4561 4.55324C18.1078 4.19901 17.6354 4 17.1429 4Z'
    }
  />
);

export function BookmarkIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BookmarkSVGpath} />;
}
