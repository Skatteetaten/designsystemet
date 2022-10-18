import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CheckSVGpath = (
  <path d={'M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z'} />
);

export function CheckIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CheckSVGpath} />;
}
