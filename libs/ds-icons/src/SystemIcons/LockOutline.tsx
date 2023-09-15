import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LockOutlineSVGpath = (
  <path
    d={
      'M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 0 4Zm6 3V10H6v10h12Zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 1 1 10 0v2h1Zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z'
    }
  />
);

export function LockOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LockOutlineSVGpath} />;
}
