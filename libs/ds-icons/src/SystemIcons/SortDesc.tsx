import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SortDescSVGpath = (
  <path
    d={
      'm18 3-4.001 4H17v14h2V7h3l-4-4ZM2 7h4V5H2v2Zm0 6h7v-2H2v2Zm0 6h10v-2H2v2Z'
    }
  />
);

export function SortDescIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SortDescSVGpath} />;
}
