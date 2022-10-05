import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const BriefcaseSVGpath = (
  <path
    d={
      'M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2Zm4 4V4h-4v2h4Z'
    }
  />
);

export function BriefcaseIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={BriefcaseSVGpath} />;
}
