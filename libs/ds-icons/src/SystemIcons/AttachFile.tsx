import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AttachFileSVGpath = (
  <path
    d={
      'M16.5 6v11.5a4 4 0 1 1-8 0V5a2.5 2.5 0 1 1 5 0v10.5a1 1 0 0 1-2 0V6H10v9.5a2.5 2.5 0 0 0 5 0V5a4 4 0 1 0-8 0v12.5a5.5 5.5 0 0 0 11 0V6h-1.5Z'
    }
  />
);

export function AttachFileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AttachFileSVGpath} />;
}
