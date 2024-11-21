import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const WarningStopSVGpath = (
  <path
    d={
      'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM13 16h-2v-2h2zm0-4h-2V8h2z'
    }
  />
);

export function WarningIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={WarningStopSVGpath} />;
}
