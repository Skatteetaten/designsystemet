import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CarRecycleSVGpath = (
  <path
    d={
      'M22.1,35c0-6.63,5.37-12,12-12,3.13,0,5.97,1.21,8.11,3.17.51-.06.96-.28,1.3-.66.36-.42.54-.94.48-1.5l-.18-2.3c-.08-1.06-.98-1.88-2.04-1.88h-.12l-.96.06c-.38-1.06-.78-2.42-1.16-3.74-.46-1.64-.94-3.32-1.42-4.52-.32-.78-1.04-1.28-1.84-1.3-4.02-.08-8.1-.14-12.14-.14s-8.1.06-12.12.14c-.8.02-1.52.52-1.84,1.3-.48,1.2-.96,2.88-1.42,4.52-.38,1.32-.78,2.68-1.16,3.74l-1.04-.06h-.12c-1.06,0-1.96.82-2.04,1.88l-.18,2.3c-.06.56.12,1.08.48,1.5.36.4.84.64,1.38.68l.24.02v6.56c0,.06,0,.12.02.16-.02.06-.02.12-.02.18v2.68c0,1.12.9,2.02,2.02,2.02h5.02c1.1,0,2-.9,2-2.02v-.62c2.25.08,4.51.09,6.76.11,0-.09-.01-.18-.01-.28ZM12.21,29.49c-1.18,0-2.14-.98-2.14-2.2s.96-2.18,2.14-2.18,2.14.98,2.14,2.18-.96,2.2-2.14,2.2ZM12.67,21.83h-.04c-.48,0-.74-.38-.66-.82.24-1.68,1.14-5.32,1.72-6.96.1-.28.38-.46.7-.48,3.24-.08,6.5-.12,9.74-.12s6.5.04,9.76.12c.32.02.6.2.7.48.58,1.64,1.48,5.28,1.72,6.96.06.44-.2.82-.66.82h-.04c-3.82-.1-7.64-.16-11.48-.16s-7.64.06-11.46.16Z M42.54,34.75c-.13-4.03-3.45-7.27-7.52-7.27-1.42,0-2.8.4-4.01,1.17l-.26.17,1.68,1.68.16-.09c.73-.4,1.57-.61,2.43-.61,2.79,0,5.07,2.2,5.2,4.95h-3.07l4.24,4.24,4.24-4.24h-3.08Z M37.45,39.6c-.73.4-1.57.61-2.43.61-2.79,0-5.07-2.2-5.2-4.95h3.07l-4.24-4.24-4.24,4.24h3.08c.13,4.03,3.45,7.27,7.52,7.27,1.42,0,2.8-.4,4.01-1.17l.26-.17-1.68-1.68-.16.09Z'
    }
  />
);

export function CarRecycleIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={CarRecycleSVGpath}
      size={props.size === 'large' ? props.size : 'medium'}
      variant={'themeIcon'}
    />
  );
}
