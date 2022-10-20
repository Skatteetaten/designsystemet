import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronRightSVGpath = (
  <path d={'m7.1 5.8 6.1 6.1L7.1 18 9 19.9l8-8-8-8-1.9 1.9Z'} />
);

export function ChevronRightIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronRightSVGpath} />;
}
