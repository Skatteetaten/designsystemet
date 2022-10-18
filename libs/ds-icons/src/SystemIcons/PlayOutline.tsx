import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PlayOutlineSVGpath = (
  <path
    d={
      'M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm-2 14.5 6-4.5-6-4.5v9Z'
    }
  />
);

export function PlayOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PlayOutlineSVGpath} />;
}
