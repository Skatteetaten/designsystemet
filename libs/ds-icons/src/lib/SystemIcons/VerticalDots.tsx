import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const VerticalDotsSVGpath = (
  <path
    d={
      'M16 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z'
    }
  />
);

export function VerticalDotsIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={VerticalDotsSVGpath} />;
}
