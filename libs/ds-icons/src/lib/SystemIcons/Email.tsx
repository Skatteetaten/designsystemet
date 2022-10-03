import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const EmailSVGpath = (
  <path
    d={
      'M20 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16Zm0-14-8 5-8-5h16ZM4 18V8.4l8 5 8-5V18H4Z'
    }
  />
);

export function EmailIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={EmailSVGpath} />;
}
