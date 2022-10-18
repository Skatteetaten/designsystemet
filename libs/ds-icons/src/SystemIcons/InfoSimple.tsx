import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InfoSimpleSVGpath = (
  <path d={'M10.75 8.4h2.5V6h-2.5v2.4Zm0 9.6h2.5v-7.2h-2.5V18Z'} />
);

export function InfoSimpleIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={InfoSimpleSVGpath} />;
}
