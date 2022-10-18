import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const HammerSVGpath = (
  <path
    d={
      'm16 5 3 3-.5.5c1 1 1.5 1.5 2 1L22 11c0 1-1.5 2.5-2.5 2.5L18 12c.5-.5 0-1-1-2l-1 1-3-3c1.5-2 0-4-4-3 1-1 2-2 3-2 .5 0 2 0 4 2ZM2 20l2 2 10-10-2-2L2 20Z'
    }
  />
);

export function HammerIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={HammerSVGpath} />;
}
