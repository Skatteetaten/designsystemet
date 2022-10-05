import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ListReorderSVGpath = (
  <path d={'M18.5 6h-16v2h16V6Zm3 5h-16v2h16v-2Zm-19 5h16v2h-16v-2Z'} />
);

export function ListReorderIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ListReorderSVGpath} />;
}
