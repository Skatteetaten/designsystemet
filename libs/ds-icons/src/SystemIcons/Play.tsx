import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PlaySVGpath = <path d={'M8,5.14V19.14L19,12.14L8,5.14Z'} />;

export function PlayIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PlaySVGpath} />;
}
