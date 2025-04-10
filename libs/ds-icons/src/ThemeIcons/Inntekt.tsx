import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InntektSVGpath = (
  <path
    d={
      'M10.4 34h11c.8 0 1.5.7 1.5 1.5V39c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.7-1.5 1.5-1.5Zm0-8h11c.8 0 1.5.7 1.5 1.5V31c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.7-1.5 1.5-1.5Zm0-8h11c.8 0 1.5.7 1.5 1.5V23c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.7-1.5 1.5-1.5Zm27.2 16h-11c-.8 0-1.5.7-1.5 1.5V39c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10V36h10v2.5Zm.5-12.5h-11c-.8 0-1.5.7-1.5 1.5V31c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10V28h10v2.5Zm.5-12.5h-11c-.8 0-1.5.7-1.5 1.5V23c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10V20h10v2.5ZM23 10.4 12.4 7.6c-.1 0-.2-.1-.4-.1-.7 0-1.3.5-1.4 1.1L9.7 12c-.2.8.3 1.6 1.1 1.8l10.6 2.8c.1 0 .3.1.4 0 .7 0 1.3-.5 1.5-1.1l.9-3.4c.1-.7-.4-1.5-1.2-1.7Z'
    }
  />
);

export function InntektIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={InntektSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
