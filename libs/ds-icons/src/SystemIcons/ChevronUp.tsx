import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronUpSVGpath = (
  <path d={'M5.88 16.88 12 10.773l6.12 6.107L20 15l-8-8-8 8 1.88 1.88Z'} />
);

export function ChevronUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronUpSVGpath} />;
}
