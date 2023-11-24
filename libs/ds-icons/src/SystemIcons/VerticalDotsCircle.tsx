import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const VerticalDotsCircleSVGpath = (
  <path
    d={
      'M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-4.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
    }
  />
);

export function VerticalDotsCircleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={VerticalDotsCircleSVGpath} />;
}
