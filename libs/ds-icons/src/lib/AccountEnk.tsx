import * as React from 'react';

import Icon from './Icon';
import { IconProps } from './Icon/icon.types';

export const AccountEnkSVGpath = (
  <path
    d={
      'M18 13c.6 0 1 .4 1 .9v.9h2c.6 0 1 .4 1 .9v4.2c0 .5-.4.9-1 .9h-8c-.6 0-1-.4-1-.9v-4.2c0-.5.4-.9 1-.9h2v-.9c0-.5.4-.9 1-.9h2Zm-8 0c.6 0 1.1 0 1.6.1-.1.2-2.3 1.3-1.7 5.9H2v-2c0-2.2 3.6-4 8-4Zm8 1h-2v.899h2V14ZM10 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4Z'
    }
  />
);

export function AccountEnkIcon(props: IconProps): JSX.Element {
  return <Icon {...props} svgPath={AccountEnkSVGpath} />;
}
