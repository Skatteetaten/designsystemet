import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ListAddSVGpath = (
  <path
    d={
      'M20 6H4v2h16V6Zm-9 5H4v2h7v-2Zm-7 5h7v2H4v-2Zm12-2h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3Z'
    }
  />
);

export function ListAddIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ListAddSVGpath} />;
}
