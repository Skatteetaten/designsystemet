import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChevronDownSVGpath = (
  <path d={'m18.1 6.98-6.1 6.1-6.1-6.1L4 8.88l8 8 8-8-1.9-1.9Z'} />
);

export function ChevronDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChevronDownSVGpath} />;
}
