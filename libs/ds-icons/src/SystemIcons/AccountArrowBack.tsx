import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AccountArrowBackSVGpath = (
  <path
    d={
      'M17 18h4v-2h-4v-2l-3 3 3 3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5 0-1.2.3-2.3.9-3.4-.6 0-1.2-.1-1.9-.1'
    }
  ></path>
);

export function AccountArrowBackIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={AccountArrowBackSVGpath} />;
}
