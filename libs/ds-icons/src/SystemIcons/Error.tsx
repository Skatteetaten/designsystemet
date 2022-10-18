import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ErrorSVGpath = (
  <path
    d={
      'M13 13h-2V7h2v6Zm0 4h-2v-2h2v2ZM12 2C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Z'
    }
  />
);

export function ErrorIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ErrorSVGpath} />;
}
