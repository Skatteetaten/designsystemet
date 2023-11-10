import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PauseOutlineSVGpath = (
  <path
    d={
      'M13 16V8h2v8h-2Zm-4 0V8h2v8H9Zm3-14a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z'
    }
  />
);

export function PauseOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PauseOutlineSVGpath} />;
}
