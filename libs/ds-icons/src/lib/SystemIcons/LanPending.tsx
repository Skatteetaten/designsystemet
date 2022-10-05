import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const LanPendingSVGpath = (
  <path
    d={
      'M4 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2H1v2h12V9h-3c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2H4Zm0 2h6v4H4V3Zm-1 9v2h2v-2H3Zm11 1c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h-3v2h12v-2h-3c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2h-6ZM3 15v2h2v-2H3Zm11 0h6v4h-6v-4ZM3 18v2h2v-2H3Zm3 0v2h2v-2H6Zm3 0v2h2v-2H9Z'
    }
  />
);

export function LanPendingIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={LanPendingSVGpath} />;
}
