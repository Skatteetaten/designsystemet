import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const KeySVGpath = (
  <path
    d={
      'M12.6 10c-.8-2.3-3-4-5.6-4-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.6-4H16v4h4v-4h3v-4H12.6ZM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z'
    }
  />
);

export function KeyIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={KeySVGpath} />;
}
