import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AddSVGpath = (
  <path
    d={'M19 10.75H13.25V5H10.75V10.75H5V13.25H10.75V19H13.25V13.25H19V10.75Z'}
  />
);

export function AddIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AddSVGpath} />;
}
