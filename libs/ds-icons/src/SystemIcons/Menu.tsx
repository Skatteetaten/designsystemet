import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MenuSVGpath = (
  <path d={'M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z'} />
);

export function MenuIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MenuSVGpath} />;
}
