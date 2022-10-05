import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BookmarkSVGpath = (
  <path d={'M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2Z'} />
);

export function BookmarkIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BookmarkSVGpath} />;
}
