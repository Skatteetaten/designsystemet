import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const UndoSVGpath = (
  <path
    d={
      'M12.233 8.9C9.90278 8.9 7.79238 9.8 6.16561 11.24L3 8V16.1H10.914L7.73083 12.842C8.9531 11.798 10.5095 11.15 12.233 11.15C15.3459 11.15 17.9927 13.229 18.916 16.1L21 15.398C19.7777 11.627 16.3219 8.9 12.233 8.9Z'
    }
  />
);

export function UndoIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={UndoSVGpath} />;
}
