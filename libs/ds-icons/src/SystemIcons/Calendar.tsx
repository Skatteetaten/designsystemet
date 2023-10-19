import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CalendarSVGpath = (
  <path
    d={
      'M19 19H5V8h14v11ZM16 1v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1h-2Zm1 11h-5v5h5v-5Z'
    }
  />
);

export function CalendarIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CalendarSVGpath} />;
}
