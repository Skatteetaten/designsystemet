import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BlockedSVGpath = (
  <path
    d={
      'M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1 0-20Zm0 2a8 8 0 0 0-8 8c0 1.85.63 3.55 1.68 4.91L16.91 5.68A8.005 8.005 0 0 0 12 4Zm0 16a8 8 0 0 0 6.32-12.91L7.09 18.32A8.005 8.005 0 0 0 12 20Z'
    }
  />
);

export function BlockedIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BlockedSVGpath} />;
}
