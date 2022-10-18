import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DeleteSVGpath = (
  <path
    d={
      'M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9ZM7 6h10v13H7V6Zm2 2v9h2V8H9Zm4 0v9h2V8h-2Z'
    }
  />
);

export function DeleteIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DeleteSVGpath} />;
}
