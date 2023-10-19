import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SkattetrekkSVGpath = (
  <path
    d={
      'M11.52 4.656a7.61 7.61 0 0 1 1.682.18l-2.788 9.301 8.614-3.568c.15.61.223 1.235.22 1.863a7.723 7.723 0 0 1-7.728 7.728c-4.272 0-7.776-3.456-7.776-7.728S7.2 4.656 11.52 4.656Zm4.058-.789-.074-.027c2.01.7 3.623 2.234 4.475 4.17l-6.442 2.669 2.041-6.812Z'
    }
  />
);

export function SkattetrekkIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SkattetrekkSVGpath} />;
}
