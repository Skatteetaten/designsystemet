import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArbeidTrygdPensjonSVGpath = (
  <path
    d={
      'm11.504 23.1 3.6 2.8c-1 .5-1.6 1.6-1.6 2.7 0 1.7 1.4 3.1 3.1 3.1h11.7c.6 0 1-.4 1-1 0-.5-.4-1-1-1h-11.8c-.6 0-1.1-.5-1.1-1.1 0-.5.3-.9.8-1l12.8-3.3 1.7-.3c.4-.1.9-.1 1.3 0l3.3 1.2 8.2-1.3v9.7l-6.8.2-.5.8c-.3.4-.7.7-1.2.8l-14.8 2.6c-.5.1-1.1-.1-1.5-.4l-14-11.5c-1.2-1-.8-2.9.7-3.2l2.3-.6c1.3-.3 2.7 0 3.8.8Zm14 0-6.9 1.8c-.6.1-1.1-.3-1.1-.9 0-.5.4-.9.9-.9h7.1Zm3.5-5.8c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1h-10.6c-.6 0-1-.4-1-1v-1.7c0-.6.4-1 1-1h10.6Zm-.2-7.3c.6 0 1.1.4 1.2 1l.1 1.7c.1.6-.3 1.1-.9 1.1l-10.6.8c-.6.1-1.1-.3-1.1-.9l-.1-1.7c-.1-.6.3-1.1.9-1.1l10.5-.9Z'
    }
  />
);

export function ArbeidTrygdPensjonIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={ArbeidTrygdPensjonSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
