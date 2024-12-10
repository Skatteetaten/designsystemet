import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

/**
 * @deprecated komponenten har en skrivefeil i navnet og erstattes av WarningOutlineSVGpath. Fjernes i neste major release.
 */
export const WaringOutlineSVGpath = (
  <path
    d={'M12 2 1 21h22L12 2Zm0 4 7.53 13H4.47L12 6Zm-1 4v4h2v-4h-2Zm0 6v2h2v-2'}
  />
);

// eslint-disable-next-line jsdoc/require-returns, jsdoc/require-param
/**
 * @deprecated komponenten har en skrivefeil i navnet og erstattes av WarningOutlineIcon. Fjernes i neste major release.
 */
export function WaringOutlineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={WaringOutlineSVGpath} />;
}
