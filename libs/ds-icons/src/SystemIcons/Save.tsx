import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SaveSVGpath = (
  <path
    d={
      'M15 9H5V5h10v4Zm-3 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Z'
    }
  />
);

export function SaveIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SaveSVGpath} />;
}
