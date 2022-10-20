import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PinSVGpath = (
  <path d={'M7 2v2h1v8l-2 2v1.999h5.2V22h1.601v-6.001H18V14l-2-2V4h1V2H7Z'} />
);

export function PinIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PinSVGpath} />;
}
