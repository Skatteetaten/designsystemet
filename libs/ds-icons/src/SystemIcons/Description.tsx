import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DescriptionSVGpath = (
  <path
    d={
      'M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Zm0 2h7v5h5v11H6V4Zm2 8v2h8v-2H8Zm0 4v2h5v-2H8Z'
    }
  />
);

export function DescriptionIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DescriptionSVGpath} />;
}
