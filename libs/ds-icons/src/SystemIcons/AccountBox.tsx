import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AccountBoxSVGpath = (
  <path
    d={
      'M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1Zm9-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z'
    }
  />
);

export function AccountBoxIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AccountBoxSVGpath} />;
}
