import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FolkeregisterSVGpath = (
  <path
    d={
      'M19.779 15.31c.14 0 .246.049.316.147.07.098.084.216.04.352l-1.75 5.291a.695.695 0 0 1-.267.353.696.696 0 0 1-.414.147H6.296a.696.696 0 0 1-.414-.147.694.694 0 0 1-.267-.353l-1.75-5.29c-.044-.137-.03-.255.04-.353.07-.098.176-.148.316-.148H19.78l-.001.001ZM14.1 16.363H9.937v1.055H14.1v-1.055ZM16.32 2.4v2.4h1.937l1.085 9.382-1.214.148-.98-8.38h-.828v4.13H8.16V5.95H6.852l-.98 8.38-1.214-.148L5.743 4.8H8.16V2.4h8.16Zm-.175 10.8v1.055h-8.29V13.2h8.29Zm0-2.11v1.055h-8.29v-1.054h8.29v-.001Zm-.772-7.725H9.107v5.75h6.266v-5.75Zm-2.125 3.26a.61.61 0 0 1 .475.225c.131.15.197.331.197.543v.767h-3.36v-.767c0-.212.066-.393.197-.543a.61.61 0 0 1 .475-.224h2.016v-.001Zm-1-2.305c.28 0 .518.112.714.336.196.223.294.495.294.815 0 .32-.098.591-.294.815a.915.915 0 0 1-.714.336.915.915 0 0 1-.714-.336 1.194 1.194 0 0 1-.294-.815c0-.32.098-.592.294-.815a.915.915 0 0 1 .714-.336Z'
    }
  />
);

export function FolkeregisterIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={FolkeregisterSVGpath} />;
}
