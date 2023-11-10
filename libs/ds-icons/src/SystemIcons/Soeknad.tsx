import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SoeknadSVGpath = (
  <path
    d={
      'M10 17c0 1.1.9 2 2 2s2-.9 2-2h7v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2h7Zm9-14c1.1 0 2 .9 2 2v10H3V5a2 2 0 0 1 2-2h14Zm0 2H5v5h5c0 .36.1.71.27 1a1.996 1.996 0 0 0 3.46 0c.17-.29.27-.64.27-1h5V5Z'
    }
  />
);

export function SoeknadIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SoeknadSVGpath} />;
}
