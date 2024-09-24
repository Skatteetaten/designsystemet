import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BookmarkOutlineSVGpath = (
  <path
    d={
      'M12 15.4395L16.3077 17.1831V6.5H7.69231V17.1831L12 15.4395ZM5 21V5.88889C5 5.38792 5.21071 4.90748 5.58579 4.55324C5.96086 4.19901 6.46957 4 7 4H17C17.5304 4 18.0391 4.19901 18.4142 4.55324C18.7893 4.90748 19 5.38792 19 5.88889V21L12 18.1667L5 21Z'
    }
  />
);

export function BookmarOutlinekIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={BookmarkOutlineSVGpath} />;
}
