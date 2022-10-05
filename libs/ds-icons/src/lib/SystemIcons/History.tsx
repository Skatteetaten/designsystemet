import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const HistorySVGpath = (
  <path
    d={
      'M13.5 8H12v5l4.28 2.54.72-1.21-3.5-2.08V8ZM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 1 1 7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.895 8.895 0 0 0 13 21a9 9 0 0 0 0-18Z'
    }
  />
);

export function HistoryIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={HistorySVGpath} />;
}
