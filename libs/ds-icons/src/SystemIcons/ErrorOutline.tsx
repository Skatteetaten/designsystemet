import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ErrorOutlineSVGpath = (
  <path
    d={
      'M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z'
    }
  />
);

export function ErrorOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ErrorOutlineSVGpath} />;
}
