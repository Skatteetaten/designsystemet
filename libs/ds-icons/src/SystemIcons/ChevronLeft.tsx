import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronLeftSVGpath = (
  <path d={'m16.9 17.98-6.1-6.1 6.1-6.1-1.8-1.9-8 8 8 8 1.8-1.9Z'} />
);

export function ChevronLeftIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronLeftSVGpath} />;
}
