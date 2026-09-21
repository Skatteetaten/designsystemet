import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PauseSVGpath = <path d={'M14,19H18V5H14M6,19H10V5H6V19Z'} />;

export function PauseIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PauseSVGpath} />;
}
