import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArrowForwardSVGpath = (
  <path
    d={
      'M1.8 12.6v-1.8h16.8l-5.2-5.1 1.4-1.3 7.5 7.3-7.7 7.3-1.4-1.3 5.2-5.1H1.8Z'
    }
  />
);

export function ArrowForwardIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ArrowForwardSVGpath} />;
}
