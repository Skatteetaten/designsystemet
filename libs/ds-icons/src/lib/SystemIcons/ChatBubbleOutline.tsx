import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ChatBubbleOutlineSVGpath = (
  <path
    d={
      'M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9Zm1-6v3.08L13.08 16H20V4H4v12h6Z'
    }
  />
);

export function ChatBubbleOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ChatBubbleOutlineSVGpath} />;
}
