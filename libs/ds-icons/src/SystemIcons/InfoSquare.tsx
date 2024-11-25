import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InfoSquareSVGpath = (
  <path d={'M21 3H3v18h18zm-7.75 5.4h-2.5V6h2.5zm0 9.6h-2.5v-7.2h2.5z'} />
);

export function InfoSquareIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={InfoSquareSVGpath} />;
}
