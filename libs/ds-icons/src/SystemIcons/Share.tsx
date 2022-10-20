import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ShareSVGpath = (
  <path
    d={
      'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11a2.987 2.987 0 0 0 3.707.304A3 3 0 1 0 15 5c0 .24.04.47.09.7L8.04 9.81a2.987 2.987 0 0 0-4.161.069A3 3 0 0 0 6 15c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66 0 1.61 1.31 2.91 2.92 2.91a2.915 2.915 0 1 0 0-5.83Z'
    }
  />
);

export function ShareIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ShareSVGpath} />;
}
