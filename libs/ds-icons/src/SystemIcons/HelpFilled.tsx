import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const HelpFilledSVGpath = (
  <path
    d={
      'm15.07 11.25-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 1 0-4 0H8a4 4 0 0 1 8 0 3.2 3.2 0 0 1-.93 2.25ZM13 19h-2v-2h2v2ZM12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 20 0c0-5.53-4.5-10-10-10Z'
    }
  />
);

export function HelpFilledIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={HelpFilledSVGpath} />;
}
