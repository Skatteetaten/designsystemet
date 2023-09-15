import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const EiendelerEgenkapitalGjeldSVGpath = (
  <path
    d={
      'M25.1 36c-.3-.3-.6-.4-1-.4s-.7.2-1 .4l-3.2 3c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5h6.4c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.5-1.1l-3.2-3Zm18 .3L5.6 26c-.8-.2-1.6.3-1.8 1.1-.2.8.3 1.6 1 1.8l37.6 10.3c.1 0 .3.1.4.1.7 0 1.3-.5 1.5-1.1.1-.8-.4-1.6-1.2-1.9ZM6.4 15.6h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Zm-1.7-3.2c.1.7.8 1.2 1.5 1.2h.3l10.8-2.2c.8-.2 1.3-.9 1.2-1.8l-.4-2c-.2-.7-.8-1.2-1.5-1.2h-.3L5.4 8.6c-.8.2-1.3.9-1.2 1.8l.5 2Zm26.6 14.2h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Zm0-7h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Zm0-7h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Z'
    }
  />
);

export function EiendelerEgenkapitalGjeldIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={EiendelerEgenkapitalGjeldSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
