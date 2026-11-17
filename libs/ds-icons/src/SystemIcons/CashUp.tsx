import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CashUpSVGpath = (
  <path
    d={
      'M21 22.75H3V10.75H21V22.75ZM7 12.75C7 13.86 6.1 14.75 5 14.75V18.75C6.1 18.75 7 19.65 7 20.75H17C17 19.65 17.9 18.75 19 18.75V14.75C17.9 14.75 17 13.86 17 12.75H7ZM12 14.75C13.1046 14.75 14 15.6454 14 16.75C14 17.8546 13.1046 18.75 12 18.75C10.8954 18.75 10 17.8546 10 16.75C10 15.6454 10.8954 14.75 12 14.75ZM16.25 5.49023L15.1797 6.5498L12.75 4.12988V9.25H11.25V4.12988L8.82031 6.5498L7.75 5.49023L12 1.25L16.25 5.49023Z'
    }
  />
);

export function CashUpIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CashUpSVGpath} />;
}
