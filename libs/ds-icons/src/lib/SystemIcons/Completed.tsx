import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CompletedSVGpath = (
  <path
    d={
      'M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1 0-20Zm-1 14.5 7-7-1.41-1.41L11 13.67l-3.09-3.08L6.5 12l4.5 4.5Z'
    }
  />
);

export function CompletedIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CompletedSVGpath} />;
}
