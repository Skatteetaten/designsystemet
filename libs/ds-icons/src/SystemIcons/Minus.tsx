import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MinusSVGpath = <path d={'M19 11H5V13.5H19V11Z'} />;

export function MinusIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MinusSVGpath} />;
}
