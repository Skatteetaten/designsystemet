import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MvaFastsettingSVGpath = (
  <path
    d={
      'M12.33 7h11l8.31 8.22v7a12.107 12.107 0 0 0-1.21-.07 11.32 11.32 0 0 0-1.55.11v-5.62H22V9.75h-9.69v22h7.13a11.864 11.864 0 0 0 0 2.75h-7.13a2.76 2.76 0 0 1-2.76-2.75v-22A2.76 2.76 0 0 1 12.33 7Zm3.45 11.295a2.65 2.65 0 0 1 1.09-.215A2.661 2.661 0 0 1 19.56 21a2.69 2.69 0 1 1-5.37 0 2.65 2.65 0 0 1 1.59-2.705Zm.19 2.695c0 .98.27 1.64.9 1.64h-.03c.62.04.92-.67.92-1.64 0-.97-.26-1.71-.89-1.71s-.9.73-.9 1.71Zm6.23-2.68-5.36 9.99h1.36l5.37-9.99H22.2Zm.316 4.614c.342-.15.71-.226 1.084-.224a2.549 2.549 0 0 1 2.01.88c-.464.242-.909.52-1.33.83a.76.76 0 0 0-.68-.5c-.62 0-.89.67-.89 1.67v.22a11.808 11.808 0 0 0-1.26 1.63 3.08 3.08 0 0 1-.53-1.81 2.68 2.68 0 0 1 1.596-2.696ZM30.79 43a9.66 9.66 0 1 1 9.66-9.66A9.67 9.67 0 0 1 30.79 43Zm0-16.53a6.87 6.87 0 1 0 6.86 6.87 6.88 6.88 0 0 0-6.86-6.87Zm-1.32 8.09 4.21 1.98.77-1.62-3.19-1.5v-4.21h-1.79v5.35Z'
    }
  />
);

export function MvaFastsettingIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={MvaFastsettingSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
