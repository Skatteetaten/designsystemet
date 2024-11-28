import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ClockSVGpath = (
  <path
    d={
      'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m4.3 13.2L11 12.3V7h1.5v4.4l4.5 2.5z'
    }
  />
);

export function ClockIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ClockSVGpath} />;
}
