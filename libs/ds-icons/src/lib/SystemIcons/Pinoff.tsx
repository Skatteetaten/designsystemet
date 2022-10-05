import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PinoffSVGpath = (
  <path
    d={
      'M8 2v2h1v2.18l9.82 9.819H19V14l-2-2V4h1V2H8ZM3 5.27l6 6V12l-2.001 2v1.999h5.2V22H13.8v-5.93L19.73 22 21 20.72 4.279 4 3 5.27Z'
    }
  />
);

export function PinoffIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={PinoffSVGpath} />;
}
