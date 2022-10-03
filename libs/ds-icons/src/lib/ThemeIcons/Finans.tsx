import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FinansSVGpath = (
  <path
    d={
      'M6 7c.6 0 1 .4 1 1v31h2.5V26c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v13h2v-9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v9h2.1V24c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v15h2.1V18c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v21H42c.6 0 1.1.4 1.1 1s-.4 1-1 1H6c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1Zm30 1.9c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8.1 7.8c-.1.1-.2.2-.3.2l-8.1 3.4c-.1.1-.3.1-.4.1-.2 0-.4-.1-.6-.2l-6.1-5-4 2.4c-.4.3-1 .2-1.3-.3-.3-.5-.2-1.1.3-1.4l4.5-2.8c.4-.2.9-.2 1.2.1l6.2 5 7.4-3.1L36 8.9Z'
    }
  />
);

export function FinansIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={FinansSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
