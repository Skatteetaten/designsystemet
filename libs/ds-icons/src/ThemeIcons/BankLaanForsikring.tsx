import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BankLaanForsikringSVGpath = (
  <path
    d={
      'M40 6c1.1 0 2 .9 2 2v32c0 1.1-.9 2-2 2h-5.1v1h-5.7v-1H18.8v1h-5.7v-1H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h32Zm-3.7 5.8H11.7v2h23.6v20.3H11.7v2h24.6c.5 0 1-.4 1-1V12.8c0-.5-.5-1-1-1Zm-18 6.9c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3Zm.1 1c2.4 0 4.3 1.9 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3Zm0 2.1c-1.2 0-2.2 1-2.2 2.2 0 1.2.9 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2Z'
    }
  />
);

export function BankLaanForsikringIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={BankLaanForsikringSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
