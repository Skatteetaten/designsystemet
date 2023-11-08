import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LockSVGpath = (
  <path
    d={
      'M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 1 1 10 0v2h1Zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z'
    }
  />
);

export function LockIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LockSVGpath} />;
}
