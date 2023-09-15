import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MenuUpSVGpath = <path d={'m7 15 5-5 5 5H7Z'} />;

export function MenuUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MenuUpSVGpath} />;
}
