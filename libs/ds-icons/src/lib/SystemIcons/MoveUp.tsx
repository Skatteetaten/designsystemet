import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MoveUpSVGpath = (
  <path
    d={
      'M11.1 17.6h1.8v1.1h-1.8v-1.1zm0-3.3h1.8v2.2h-1.8v-2.2zm0 6.2h1.8v.5h-1.8v-.5zm-4.9-7.3 5-5v5.1H13V8.2l5 4.9 1.3-1.3-7.3-7-7.1 7.1 1.3 1.3zM21 3H3v1.8h18V3z'
    }
  />
);

export function MoveUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MoveUpSVGpath} />;
}
