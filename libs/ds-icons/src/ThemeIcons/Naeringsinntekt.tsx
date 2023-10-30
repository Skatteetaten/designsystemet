import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const NaeringsinntektSVGpath = (
  <path
    d={
      'M42 19.2c0-.2-.1-.3-.3-.4-.1 0-.2 0-.3.1L35.3 24v-4.8c0-.2-.1-.3-.3-.4-.1 0-.2 0-.3.1L28.6 24V12h-3.8v24H42V19.2ZM7.5 31h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Zm0-7h11c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-2c0-.9.7-1.5 1.5-1.5Zm11.7-7L8.4 14.8h-.3c-.7 0-1.3.5-1.5 1.2l-.4 2c-.2.8.4 1.6 1.2 1.8l10.8 2.1h.3c.7 0 1.3-.5 1.5-1.2l.4-2c.1-.7-.4-1.5-1.2-1.7Z'
    }
  />
);

export function NaeringsinntektIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={NaeringsinntektSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
