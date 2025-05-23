import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PersonligeForholdSVGpath = (
  <path
    d={
      'M24 4c.7 0 1.3.2 1.9.5l14.2 8.2c1.2.6 1.9 1.9 1.9 3.2v16.3c0 1.3-.7 2.5-1.9 3.2l-14.2 8.1c-.6.3-1.2.5-1.9.5s-1.3-.2-1.9-.5L7.9 35.4C6.7 34.8 6 33.5 6 32.2V15.9c0-1.4.7-2.6 1.9-3.3l14.2-8.1c.6-.3 1.2-.5 1.9-.5Zm.07 3h-.118c-.107.004-.266.029-.352.2L9.4 15.3c-.3.1-.4.3-.4.6v16.2c0 .3.1.5.4.7l14.2 8.1c.1.1.3.1.4.1.1 0 .3 0 .4-.2l14.2-8.1c.3-.1.4-.3.4-.6V15.8c0-.2-.2-.5-.4-.6L24.4 7.1c-.1-.1-.3-.1-.4-.1h.07ZM24 26.2c5 0 9.1 2 9.1 4.5V33H14.9v-2.3c0-2.5 4.1-4.5 9.1-4.5ZM24 15c2.5 0 4.6 2 4.6 4.4 0 2.4-2 4.5-4.5 4.6H24c-2.5 0-4.5-2.1-4.5-4.6 0-2.4 2-4.4 4.5-4.4Z'
    }
  />
);

export function PersonligeForholdIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={PersonligeForholdSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
