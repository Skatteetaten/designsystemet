import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const TimelapseSVGpath = (
  <path
    d={
      'M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm4.24 5.76A5.95 5.95 0 0 0 12 6v6l-4.24 4.24a6 6 0 0 0 8.48 0 5.982 5.982 0 0 0 0-8.48Z'
    }
  />
);

export function TimelapseIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={TimelapseSVGpath} />;
}
