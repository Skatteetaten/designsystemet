import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SkogfondSVGpath = (
  <path
    d={
      'm40.12 37-2.78-7.38h1.54a.51.51 0 0 0 .46-.72L33.25 16h1.68a.5.5 0 0 0 .4-.79l-6.69-9.29a.51.51 0 0 0-.81 0l-5.55 7.68a1.5 1.5 0 0 0 .95 2.4l-1.61 3.42-3.29-4.92a.499.499 0 0 0-.84 0L10 25.74a.5.5 0 0 0 .41.78h2.05L7.89 36.94a.5.5 0 0 0 .46.7h7.72v4.64h3.68v-4.64h6.64v4.64h3.68v-4.64h9.58a.499.499 0 0 0 .47-.64Z'
    }
  />
);

export function SkogfondIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={SkogfondSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
