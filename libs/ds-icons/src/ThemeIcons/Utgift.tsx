import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const UtgiftSVGpath = (
  <path
    d={
      'M21.3 31.1h-11c-.8 0-1.5.7-1.5 1.5v3.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10v-2.5h10v2.5Zm.5-12.5h-11c-.8 0-1.5.7-1.5 1.5v3.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10v-2.5h10v2.5Zm.5-12.5h-11c-.8 0-1.5.7-1.5 1.5v3.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10v-2.5h10v2.5Zm.5-12.5h-11c-.8 0-1.5.7-1.5 1.5v3.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V8.6c0-.8-.7-1.5-1.5-1.5Zm-.5 4.5h-10V9.1h10v2.5Zm5.7 11.5h11c.8 0 1.5.7 1.5 1.5v3.5c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.6-1.5 1.5-1.5Zm0-8h11c.8 0 1.5.7 1.5 1.5v3.5c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.6-1.5 1.5-1.5Zm11.6 19.5-10.6-2.8h-.4c-.7 0-1.3.5-1.5 1.1l-.9 3.4c-.2.8.3 1.6 1.1 1.8l10.6 2.8h.4c.7 0 1.3-.5 1.5-1.1l.9-3.4c.2-.8-.3-1.6-1.1-1.8Z'
    }
  />
);

export function UtgiftIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={UtgiftSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
