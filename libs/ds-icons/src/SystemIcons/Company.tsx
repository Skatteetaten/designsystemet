import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CompanySVGpath = (
  <path
    d={
      'M15.9 12.05h-.05V8.5c0-.225-.25-.35-.425-.2L10.9 12.05V8.5c0-.225-.25-.35-.425-.2L5.95 12.05V3.175h-2.8v17.7h17.7V8.5c0-.225-.25-.35-.425-.2L15.9 12.05Z'
    }
  />
);

export function CompanyIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CompanySVGpath} />;
}
