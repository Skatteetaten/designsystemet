import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PersonMoreOutlineSVGpath = (
  <path
    d={
      'M15 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.9a2.1 2.1 0 1 1 0 4.199A2.1 2.1 0 0 1 15 5.9ZM4 7v3H1v2h3v3h2v-3h3v-2H6V7H4Zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4Zm0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1Z'
    }
  />
);

export function PersonMoreOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={PersonMoreOutlineSVGpath} />;
}
