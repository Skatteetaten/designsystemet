import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ExcelFileSVGpath = (
  <path
    d={
      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1.8 18H14l-2-3.4-2 3.4H8.2l2.9-4.5L8.2 11H10l2 3.4 2-3.4h1.8l-2.9 4.5 2.9 4.5ZM13 9V3.5L18.5 9H13Z'
    }
  />
);

export function ExcelFileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ExcelFileSVGpath} />;
}
