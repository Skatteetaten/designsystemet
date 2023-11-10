import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const VerticalDotsCircleSolidSVGpath = (
  <path
    d={
      'M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1 0-20Zm0 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-5.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
    }
  />
);

export function VerticalDotsCircleSolidIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={VerticalDotsCircleSolidSVGpath} />;
}
