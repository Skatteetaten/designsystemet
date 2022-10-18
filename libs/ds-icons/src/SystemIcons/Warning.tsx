import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const WarningSVGpath = (
  <path d={'M13 14h-2v-4h2v4Zm0 4h-2v-2h2v2ZM1 21h22L12 2 1 21Z'} />
);

export function WarningIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={WarningSVGpath} />;
}
