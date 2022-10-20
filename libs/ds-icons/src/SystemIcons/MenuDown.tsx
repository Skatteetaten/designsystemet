import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MenuDownSVGpath = <path d={'m7 10 5 5 5-5H7Z'} />;

export function MenuDownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MenuDownSVGpath} />;
}
