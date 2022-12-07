import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FileSVGpath = (
  <path
    d={
      'M13 9h5.5L13 3.5V9ZM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2Zm9 16v-2H6v2h9Zm3-4v-2H6v2h12Z'
    }
  />
);

export function FileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FileSVGpath} />;
}
