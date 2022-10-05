import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FilterSVGpath = (
  <path d={'M6 13h12v-2H6v2ZM3 6v2h18V6H3Zm7 12h4v-2h-4v2Z'} />
);

export function FilterIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FilterSVGpath} />;
}
