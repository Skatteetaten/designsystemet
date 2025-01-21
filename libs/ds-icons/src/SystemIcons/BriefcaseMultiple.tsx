import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BriefcaseMultipleSVGpath = (
  <>
    <path
      d={
        'M20.89 8.51v9.99c0 .55-.45 1-1 1H4.66c0 1.1.89 1.5 2 1.5h14c.91 0 1.73-.53 1.73-1.5v-9c0-1.02-.51-1.87-1.5-1.99'
      }
    />
    <path
      d={
        'M9 1.5h4c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-9c0-1.11.89-2 2-2h3v-2c0-1.11.89-2 2-2m4 4v-2H9v2z'
      }
    />
  </>
);

export function BriefcaseMultipleIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={BriefcaseMultipleSVGpath} />;
}
