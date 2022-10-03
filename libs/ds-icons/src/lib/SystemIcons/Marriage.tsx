import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MarriageSVGpath = (
  <path
    d={
      'M18.1 5.5c1.7 1 2.9 2.9 2.9 5.1 0 3.2-2.6 5.9-5.9 5.9-3.3 0-6-2.7-6-6v-.7c-2.4.3-4.2 2.3-4.2 4.7 0 2.7 2.2 4.8 4.8 4.8 1.6 0 3-.8 3.9-2 .5.1 1 .2 1.5.2h.8c-1.1 2.3-3.4 3.9-6.1 3.9-3.8 0-6.8-3-6.8-6.8s3-6.8 6.7-6.8h.1c.5-1 1.3-1.8 2.3-2.2l1.4 1.5c-.6.3-1.1.7-1.5 1.2 2.5.8 4.4 3.2 4.5 6 1.5-.6 2.5-2 2.5-3.7 0-1.6-1-3-2.3-3.6l1.4-1.5Zm-7 4.5v.5c0 2 1.5 3.6 3.4 3.9-.1-2-1.4-3.7-3.4-4.4Zm5.5-7 .7 1.3-2.2 2.8-2.3-2.8.8-1.3h3Z'
    }
  />
);

export function MarriageIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={MarriageSVGpath} />;
}
