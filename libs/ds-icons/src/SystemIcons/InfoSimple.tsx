import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InfoSimpleSVGpath = (
  <path d={'M13.9697 9V21H10.9697V9H13.9697ZM13.9697 6H10.9697V3H13.9697V6Z'} />
);

export function InfoSimpleIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={InfoSimpleSVGpath} />;
}
