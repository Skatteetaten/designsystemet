import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PrintSVGpath = (
  <path
    d={
      'M18 3H6v4h12V3Zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3 7H8v-5h8v5Zm3-11H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3Z'
    }
  />
);

export function PrintIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PrintSVGpath} />;
}
