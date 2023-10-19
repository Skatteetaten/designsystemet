import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ExternalSVGpath = (
  <path
    d={
      'M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Zm5 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z'
    }
  />
);

export function ExternalIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ExternalSVGpath} />;
}
