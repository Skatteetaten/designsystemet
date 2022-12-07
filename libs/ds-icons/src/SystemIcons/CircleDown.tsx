import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CircleDownSVGpath = (
  <path
    d={
      'M22 12c0 5.523-4.477 10-10 10a10 10 0 1 1 10-10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM6 10l6 6 6-6-1.4-1.4-4.6 4.6-4.6-4.6L6 10Z'
    }
  />
);

export function CircleDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CircleDownSVGpath} />;
}
