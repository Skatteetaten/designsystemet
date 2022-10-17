import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ListRemoveSVGpath = (
  <path
    d={
      'M4 6h16v2H4V6Zm0 5h7v2H4v-2Zm7 5H4v2h7v-2Zm10-2.5v2h-8v-2h8ZM17 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
    }
  />
);

export function ListRemoveIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ListRemoveSVGpath} />;
}
