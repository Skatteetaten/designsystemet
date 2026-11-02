import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ReceiptFilledSVGpath = (
  <path
    d={
      'M3 4V21.99L5.93 19.48L7.96 21.22L9.98 19.49L12.01 21.22L14.03 19.49L16.05 21.22L18.07 19.49L21 22V4H3ZM13.22 15.5H5.86V14H13.22V15.5ZM17.86 12H5.86V10.5H17.86V12ZM17.86 8.5H5.86V7H17.86V8.5Z'
    }
  />
);

export function ReceiptFilledIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ReceiptFilledSVGpath} />;
}
