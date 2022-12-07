import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const WaringOutlineSVGpath = (
  <path
    d={'M12 2 1 21h22L12 2Zm0 4 7.53 13H4.47L12 6Zm-1 4v4h2v-4h-2Zm0 6v2h2v-2'}
  />
);

export function WaringOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={WaringOutlineSVGpath} />;
}
