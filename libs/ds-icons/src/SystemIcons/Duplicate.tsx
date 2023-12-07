import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DuplicateSVGpath = (
  <path
    d={
      'M20 21V7H9v6H7V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2h2v2h11Zm-8-4H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12v2H5v12h7v-2l4 3-4 3v-2Z'
    }
  />
);

export function DuplicateIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DuplicateSVGpath} />;
}
