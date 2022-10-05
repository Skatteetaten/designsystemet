import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CouldSVGpath = (
  <path
    d={
      'M6 19A5 5 0 0 1 6 9c1-2.35 3.3-4 6-4 3.43 0 6.24 2.66 6.5 6.03L19 11a4 4 0 1 1 0 8H6Zm13-6h-2v-1a5.004 5.004 0 0 0-9.94-.81C6.73 11.07 6.37 11 6 11a3 3 0 0 0 0 6h13a2 2 0 0 0 0-4Z'
    }
  />
);

export function CouldIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CouldSVGpath} />;
}
