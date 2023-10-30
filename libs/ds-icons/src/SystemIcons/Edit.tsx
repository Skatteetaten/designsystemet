import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const EditSVGpath = (
  <path
    d={
      'M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83ZM3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z'
    }
  />
);

export function EditIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={EditSVGpath} />;
}
