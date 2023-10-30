import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SortUpSVGpath = (
  <path
    d={'M12.9 22h-1.8V5.2L6 10.4 4.7 9 12 1.5l7.3 7.6-1.3 1.4-5.1-5.2V22Z'}
  />
);

export function SortUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SortUpSVGpath} />;
}
