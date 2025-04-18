import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DrosjeServeringSVGpath = (
  <path
    d={
      'M18.9 19H4c-.8 0-1.5.6-1.5 1.4v8.7c0 2.6 2.1 4.6 4.6 4.6h3.7c2.6 0 4.6-2.1 4.6-4.6v-1.6h.9c2.2 0 4.1-1.8 4.1-4.1v-2.9c.1-.8-.6-1.5-1.5-1.5Zm-.5 4.5c0 1.1-.9 2-2 2h-.9v-4.4h2.9v2.4Zm28.1 1.9v-1.3c-.1-.6-.6-1.1-1.2-1.1h-.7c-.2-.6-.5-1.5-.7-2.3-.2-.8-.6-2.1-.8-2.8-.2-.4-.6-.8-1.1-.9-1.2 0-2.4 0-3.7-.1V15c0-.6-.4-1-1-1h-5.5c-.6 0-1 .4-1 1v2c-1.2 0-2.4 0-3.6.1-.5 0-.9.4-1.1.9-.3.9-.6 1.8-.9 2.8-.2.8-.5 1.6-.7 2.3h-.7c-.6 0-1.2.5-1.2 1.1v1.5c0 .3.1.7.2 1 .2.2.5.4.9.4h.1v5.8c0 .6.5 1.2 1.1 1.2H28c.7 0 1.2-.5 1.2-1.2v-.4c1.8 0 3.5.1 5.3.1 1.8 0 3.5 0 5.3-.1v.4c0 .6.4 1.2 1.1 1.2H44c.6 0 1.2-.4 1.2-1.1v-6h.1c.3 0 .6-.1.8-.4.4-.5.5-.9.4-1.2Zm-19.1 3.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3Zm10.8-1.2h-1.5v1.5h-1.5v-1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v1.5h1.5v-1.5h1.5v1.5h1.5v-1.5h1.5v1.5Zm-3.6-3.5c-2.3 0-4.7 0-7 .1-.2 0-.5-.2-.5-.4v-.1c.2-1.4.6-2.8 1.1-4.2 0-.1.2-.2.4-.2 1.9 0 3.9-.1 5.9-.1 2 0 3.9 0 5.9.1.2 0 .4.1.4.2.4 1.4.8 2.8 1.1 4.2 0 .2-.1.5-.4.5-2.3 0-4.6-.1-6.9-.1Zm7.2 4.7c-.7 0-1.3-.6-1.3-1.3.1-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3Z'
    }
  />
);

export function DrosjeServeringIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={DrosjeServeringSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
