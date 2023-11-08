import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AddSVGpath = <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />;

export function AddIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AddSVGpath} />;
}
