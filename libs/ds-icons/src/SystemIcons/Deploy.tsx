import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const DeploySVGpath = (
  <path
    d={
      'm2.19 19.169 4.09-4.08c-.21-.3-.36-.62-.45-.97l-3.64 3.64v1.41Zm0 2.83H3.6l4.77-4.76-1.42-1.41-4.76 4.76v1.41Zm4.24 0 3.64-3.64c-.34-.09-.67-.24-.97-.45l-4.08 4.09h1.41Zm2.64-5.47-1.41-1.41 1.41 1.41Zm5.66-7.07c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .77.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0Zm7.07-7.07S16.85.268 11.19 5.929c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46a19.1 19.1 0 0 0 6.71-4.35c5.66-5.66 3.54-10.61 3.54-10.61ZM5.83 12.499 2 10.869l6.1-2.77c-.91 1.36-1.69 2.83-2.27 4.4Zm7.49 9.69-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1Z'
    }
  />
);

export function DeployIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={DeploySVGpath} />;
}
