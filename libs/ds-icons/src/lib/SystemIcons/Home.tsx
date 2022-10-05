import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const HomeSVGpath = <path d={'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z'} />;

export function HomeIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={HomeSVGpath} />;
}
