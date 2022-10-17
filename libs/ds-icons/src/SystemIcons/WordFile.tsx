import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const WordFileSVGpath = (
  <path
    d={
      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1.2 18h-1.4L12 13.2 10.2 20H8.8l-2.2-9h1.5l1.4 6.8 1.8-6.8h1.3l1.8 6.8 1.4-6.8h1.5l-2.1 9ZM13 9V3.5L18.5 9H13Z'
    }
  />
);

export function WordFileIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={WordFileSVGpath} />;
}
