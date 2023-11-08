import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SendSVGpath = <path d={'M2 3v7l15 2-15 2v7l21-9L2 3Z'} />;

export function SendIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SendSVGpath} />;
}
