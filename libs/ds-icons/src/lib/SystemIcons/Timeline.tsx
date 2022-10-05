import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const TimelineSVGpath = (
  <path
    d={
      'm16 11.78 4.24-7.33 1.73 1-5.23 9.05-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z'
    }
  />
);

export function TimelineIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={TimelineSVGpath} />;
}
