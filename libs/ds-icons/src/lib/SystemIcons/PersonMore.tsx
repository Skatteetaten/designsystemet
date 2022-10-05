import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PersonMoreSVGpath = (
  <path
    d={
      'M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4Zm-9-4V7H4v3H1v2h3v3h2v-3h3v-2H6Zm9 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    }
  />
);

export function PersonMoreIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PersonMoreSVGpath} />;
}
