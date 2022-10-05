import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const GaveArvSVGpath = (
  <path
    d={
      'M30 7c1.4 0 2.9.6 4 1.7 2.2 2.2 2.2 5.8 0 8-1.5 1.5-4 2.2-6.3 2.6H41V42H7V19.3h13.1c-2.2-.3-4.8-1.1-6.3-2.6-2.2-2.2-2.2-5.8 0-8 1.1-1.1 2.5-1.7 4-1.7 1.4 0 2.9.6 4 1.7 1 1 1.7 2.4 2.1 3.9.5-1.5 1.1-2.9 2.1-3.9C27.1 7.6 28.6 7 30 7Zm3.4 16H14.5c0 2.1-1.7 3.8-3.8 3.8v7.6c2.1 0 3.8 1.7 3.8 3.8h18.9c0-2.1 1.7-3.8 3.8-3.8v-7.6a3.796 3.796 0 0 1-3.8-3.8ZM24 25a5.7 5.7 0 1 1 0 11.4A5.7 5.7 0 0 1 24 25Zm6.1-15a2.73 2.73 0 0 0-1.9.8c-1.1 1-1.7 3.4-1.9 5.8 2.4-.3 4.7-1 5.7-2 1-1.1 1-2.8 0-3.8-.5-.5-1.2-.8-1.9-.8Zm-12.2 0c-.7 0-1.4.3-1.9.8-1 1-1 2.7.1 3.7 1 1 3.3 1.7 5.7 2-.3-2.3-1-4.7-2-5.7-.5-.5-1.2-.8-1.9-.8Z'
    }
  />
);

export function GaveArvIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={GaveArvSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
