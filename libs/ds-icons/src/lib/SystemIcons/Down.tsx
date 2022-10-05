import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DownSVGpath = (
  <path
    d={'M11.1 1.5h1.8v16.8l5.1-5.2 1.3 1.4L12 22l-7.3-7.6L6 13l5.1 5.2V1.5Z'}
  />
);

export function DownIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DownSVGpath} />;
}
