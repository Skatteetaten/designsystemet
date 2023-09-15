import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PreviewFileSVGpath = (
  <path
    d={
      'm14 2 6 6v12.1c0 .7-.3 1.2-.8 1.6l-1.6-1.6-2.8-2.9c-.9.5-1.8.8-2.8.8-1.3 0-2.5-.5-3.5-1.5-2-1.9-2-5.1 0-7C9.4 8.5 10.7 8 12 8c1.3 0 2.5.5 3.5 1.5 1.8 1.7 2 4.4.7 6.3l1.8 1.8V9l-5-5H6v16h8.8l2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8Zm-2 8c-.8 0-1.5.3-2.1.9-.6.5-.9 1.3-.9 2.1s.3 1.5.9 2.1c.5.6 1.3.9 2.1.9s1.5-.3 2.1-.9c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1c-.6-.6-1.3-.9-2.1-.9Z'
    }
  />
);

export function PreviewFileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PreviewFileSVGpath} />;
}
