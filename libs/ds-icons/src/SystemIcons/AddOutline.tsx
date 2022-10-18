import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AddOutlineSVGpath = (
  <path
    d={
      'M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z'
    }
  />
);

export function AddOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AddOutlineSVGpath} />;
}
