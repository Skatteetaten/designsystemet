import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const XMLFileSVGpath = (
  <path
    d={
      'M13 9h5.5L13 3.5V9ZM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2Zm.12 13.5 3.74 3.74 1.42-1.41-2.33-2.33 2.33-2.33-1.42-1.41-3.74 3.74Zm11.16 0-3.74-3.74-1.42 1.41 2.33 2.33-2.33 2.33 1.42 1.41 3.74-3.74Z'
    }
  />
);

export function XMLFileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={XMLFileSVGpath} />;
}
