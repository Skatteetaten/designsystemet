import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FileOutlineSVGpath = (
  <path
    d={
      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11Z'
    }
  />
);

export function FileOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FileOutlineSVGpath} />;
}
