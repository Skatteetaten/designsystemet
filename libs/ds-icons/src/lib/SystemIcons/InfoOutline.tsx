import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const InfoOutlineSVGpath = (
  <path
    d={
      'M11 9h2V7h-2v2Zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm-1 15h2v-6h-2v6Z'
    }
  />
);

export function InfoOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={InfoOutlineSVGpath} />;
}
