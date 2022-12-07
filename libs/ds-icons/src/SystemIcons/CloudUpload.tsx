import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CloudUploadSVGpath = (
  <path
    d={
      'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04a5.994 5.994 0 0 0-3.593 10.203A6 6 0 0 0 6 20h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.96ZM19 18H6a4 4 0 0 1-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.47 5.47 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15a3 3 0 0 1-3 3ZM8 13h2.55v3h2.9v-3H16l-4-4-4 4Z'
    }
  />
);

export function CloudUploadIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CloudUploadSVGpath} />;
}
