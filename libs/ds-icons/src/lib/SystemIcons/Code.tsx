import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CodeSVGpath = (
  <path
    d={
      'm14.6 16.6 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Z'
    }
  />
);

export function CodeIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CodeSVGpath} />;
}
