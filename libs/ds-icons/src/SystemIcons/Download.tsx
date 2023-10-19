import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DownloadSVGpath = (
  <path d={'M5 20h14v-2H5v2ZM19 9h-4V3H9v6H5l7 7 7-7Z'} />
);

export function DownloadIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DownloadSVGpath} />;
}
