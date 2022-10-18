import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InfoSVGpath = (
  <path
    d={
      'M13 9h-2V7h2v2Zm0 8h-2v-6h2v6ZM12 2C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Z'
    }
  />
);

export function InfoIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={InfoSVGpath} />;
}
