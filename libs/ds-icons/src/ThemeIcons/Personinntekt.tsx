import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PersoninntektSVGpath = (
  <path
    d={
      'M30.2 24a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 3c-2 0-4 .3-6 .8V36h18v-3c0-3.3-5.4-6-12-6Zm-11.9 4h-11c-.8 0-1.5.7-1.5 1.5v2c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-2c0-.8-.7-1.5-1.5-1.5Zm0-7h-11c-.8 0-1.5.7-1.5 1.5v2c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-2c0-.8-.7-1.5-1.5-1.5Zm-10-9.1 10.8 2.2c.7.1 1.3.9 1.2 1.7l-.4 2c-.2.7-.8 1.2-1.5 1.2h-.3L7.3 19.9c-.8-.2-1.4-1-1.2-1.8l.4-2c.2-.7.8-1.2 1.5-1.2h.3Z'
    }
  />
);

export function PersoninntektIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={PersoninntektSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
