import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const UploadSVGpath = (
  <path d={'M9 16v-6H5l7-7 7 7h-4v6H9Zm-4 4v-2h14v2H5Z'} />
);

export function UploadIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={UploadSVGpath} />;
}
