import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChatBubbleOutlineSVGpath = (
  <path
    d={
      'M10.5 18.3689L12.8625 16H19.5V7H4.5V16H10.5V18.3689ZM10.2 22.21L13.9 18.5H20C20.5304 18.5 21.0391 18.2893 21.4142 17.9142C21.7893 17.5391 22 17.0304 22 16.5V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V16.5C2 17.0304 2.21071 17.5391 2.58579 17.9142C2.96086 18.2893 3.46957 18.5 4 18.5H8V21.5C8 21.7652 8.10536 22.0196 8.29289 22.2071C8.48043 22.3946 8.73478 22.5 9 22.5H9.5C9.75 22.5 10 22.4 10.2 22.21Z'
    }
    fillRule={'evenodd'}
    clipRule={'evenodd'}
    fill={'#1A1A1A'}
  />
);

export function ChatBubbleOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChatBubbleOutlineSVGpath} />;
}
