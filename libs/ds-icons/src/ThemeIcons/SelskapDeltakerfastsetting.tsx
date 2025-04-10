import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SelskapDeltakerfastsettingSVGpath = (
  <path
    d={
      'M41.708 21.957v-7.103c0-.39-.486-.681-.778-.39l-8.952 7.395h-.097v-7.102c0-.39-.486-.681-.778-.39l-8.952 7.395V14.66c0-.389-.486-.68-.778-.389l-8.951 7.395V6.097h-5.74v35.027h6.129v-1.848s0-4.67 8.173-4.67 8.173 4.67 8.173 4.67v1.848h2.335v-1.848c-.097-1.849-.973-3.503-2.433-4.67 7.103.389 7.103 4.67 7.103 4.67v1.848h5.546V21.957ZM20.984 32.562c-2.238 0-4.087-1.848-4.087-4.086 0-2.238 1.849-4.087 4.087-4.087 2.238 0 4.086 1.849 4.086 4.087 0 2.238-1.848 4.086-4.086 4.086Zm7.005 0c-.778 0-1.557-.194-2.238-.68a5.845 5.845 0 0 0 0-6.812c.681-.486 1.46-.68 2.238-.68 2.238 0 4.087 1.848 4.087 4.086 0 2.238-1.849 4.086-4.087 4.086Z'
    }
  />
);

export function SelskapDeltakerfastsettingIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={SelskapDeltakerfastsettingSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
