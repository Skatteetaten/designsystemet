import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArchiveSVGpath = (
  <path
    d={
      'M3 3h18v4H3V3m1 5h16v13H4V8m5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5h-5Z'
    }
  />
);

export function ArchiveIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArchiveSVGpath} />;
}
