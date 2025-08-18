import type { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import type { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const HomeMultipleSVGpath = (
  <path
    d={
      'M17.2598 12H14.2598V20H11.2598V14H7.25977V20H4.25977V12H1.25977L9.25977 3L17.2598 12ZM17.4902 20H16.4902V14H17.4902V20ZM20 20H19V14H20V20ZM20.2949 11.6699L19.5449 12.3301L11.6152 3.33008L12.3652 2.66992L20.2949 11.6699ZM23.1143 11.6699L22.3643 12.3301L14.4346 3.33008L15.1846 2.66992L23.1143 11.6699Z'
    }
  />
);

export function HomeMultipleIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={HomeMultipleSVGpath} />;
}
