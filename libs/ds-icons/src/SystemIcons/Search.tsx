import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const SearchSVGpath = (
  <path
    d={
      'M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16a6.5 6.5 0 1 1 0-13Zm0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z'
    }
  />
);

export function SearchIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={SearchSVGpath} />;
}
