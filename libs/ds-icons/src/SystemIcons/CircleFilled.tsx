import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CircleFilledSVGpath = (
  <path d={'M12 2C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Z'} />
);

export function CircleFilledIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CircleFilledSVGpath} />;
}
