import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CopySVGpath = (
  <path
    d={
      'M19 21H8V7h11v14Zm0-16H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z'
    }
  />
);

export function CopyIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CopySVGpath} />;
}
