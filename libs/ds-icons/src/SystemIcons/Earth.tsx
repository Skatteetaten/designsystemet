import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const EarthSVGpath = (
  <path
    d={
      'M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8ZM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2v1.93ZM12 2C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Z'
    }
  />
);

export function EarthIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={EarthSVGpath} />;
}
