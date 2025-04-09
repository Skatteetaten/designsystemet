import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChatbotDetailedSVGpath = (
  <path
    d={
      'M26.31 9.36c0 1.303-1.034 2.36-2.31 2.36s-2.31-1.057-2.31-2.36S22.724 7 24 7s2.31 1.057 2.31 2.36Zm-13.24 5.21h21.86c1.07 0 1.92.94 1.85 2.03l-1.57 20.66c-.08.97-.87 1.73-1.84 1.73H14.64c-.97 0-1.77-.75-1.85-1.73L11.23 16.6c-.08-1.1.77-2.03 1.84-2.03Zm3.03 13.88h1.85V23.9H16.1v4.55Zm9.13 5.05 2.1-1.95c.2-.18.06-.5-.23-.5h-6.74c-.29 0-.43.31-.23.5l2.1 1.95c.83.77 2.17.77 3 0Zm4.83-5.05h1.85V23.9h-1.85v4.55Zm9.58 1.67h1.03c.73 0 1.33-.6 1.33-1.33v-4.87c0-.73-.59-1.33-1.33-1.33h-1.03c-.73 0-1.33.59-1.33 1.33v4.87c0 .73.59 1.33 1.33 1.33Zm-32.31 0h1.03c.74 0 1.33-.6 1.33-1.34v-4.87c0-.73-.59-1.33-1.33-1.33H7.33c-.73 0-1.33.59-1.33 1.33v4.87c0 .74.6 1.34 1.33 1.34Z'
    }
  />
);

export function ChatbotDetailedIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={ChatbotDetailedSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
