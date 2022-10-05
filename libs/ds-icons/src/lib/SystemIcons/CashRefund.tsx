import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const CashRefundSVGpath = (
  <path
    d={
      'M3 11h18v12H3V11Zm9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-5-2a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H7Zm10-8v5h-1.5V6.5H9.88l2.42 2.43L11.24 10 7 5.75l4.24-4.25 1.06 1.07L9.88 5H17Z'
    }
  />
);

export function CashRefundIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={CashRefundSVGpath} />;
}
