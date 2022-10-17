import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const UpdateSVGpath = (
  <path
    d={
      'M19 12h3.32l-4.95 4.95L12.42 12h4.55a5.82 5.82 0 0 0-1.73-4.25 6 6 0 0 0-8.48 0 6.01 6.01 0 0 0 0 8.49 6.008 6.008 0 0 0 6.82 1.17l1.47 1.47a7.99 7.99 0 0 1-9.71-1.23c-3.12-3.12-3.11-8.18.01-11.3 3.15-3.13 8.18-3.14 11.31-.01A7.98 7.98 0 0 1 19 12Z'
    }
  />
);

export function UpdateIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={UpdateSVGpath} />;
}
