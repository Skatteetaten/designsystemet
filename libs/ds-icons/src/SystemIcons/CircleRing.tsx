import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CircleRingSVGpath = (
  <path
    d={
      'M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z'
    }
  />
);

export function CircleRingIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CircleRingSVGpath} />;
}
