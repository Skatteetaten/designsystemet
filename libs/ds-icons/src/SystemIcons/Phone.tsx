import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PhoneSVGpath = (
  <path
    d={
      'M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9.98.49 1.85 1.12 2.67 1.85.18.18.43.28.68.28.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7A16.965 16.965 0 0 0 12 3ZM9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7H9Zm3 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z'
    }
  />
);

export function PhoneIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PhoneSVGpath} />;
}
