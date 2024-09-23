import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChatBubbleSVGpath = (
  <path
    d={
      'M9 22.5C8.73478 22.5 8.48043 22.3946 8.29289 22.2071C8.10536 22.0196 8 21.7652 8 21.5V18.5H4C3.46957 18.5 2.96086 18.2893 2.58579 17.9142C2.21071 17.5391 2 17.0304 2 16.5V6.5C2 5.96957 2.21071 5.46086 2.58579 5.08579C2.96086 4.71071 3.46957 4.5 4 4.5H20C20.5304 4.5 21.0391 4.71071 21.4142 5.08579C21.7893 5.46086 22 5.96957 22 6.5V16.5C22 17.0304 21.7893 17.5391 21.4142 17.9142C21.0391 18.2893 20.5304 18.5 20 18.5H13.9L10.2 22.21C10 22.4 9.75 22.5 9.5 22.5H9Z'
    }
  />
);

export function ChatBubbleIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={ChatBubbleSVGpath} />;
}
