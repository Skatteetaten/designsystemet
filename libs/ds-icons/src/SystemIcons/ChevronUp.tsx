import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronUpSVGpath = (
  <path d={'M5.88 16.88L12 10.773L18.12 16.88L20 15L12 7L4 15L5.88 16.88Z'} />
);

export function ChevronUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronUpSVGpath} />;
}
