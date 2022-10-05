import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const AndreForholdSVGpath = (
  <path
    d={
      'M34.519 8.316c.908 0 1.62.75 1.62 1.66V35.93a1.67 1.67 0 0 1-1.66 1.66h-.79v.79c0 .868-.672 1.58-1.501 1.58h-18.41c-.83 0-1.501-.712-1.501-1.58V12.266c0-.87.671-1.58 1.5-1.58h1.186v-.712c0-.908.75-1.659 1.66-1.659l17.896.001Zm-11.062 4.82h-8.692v24.296H31.24V21.274h-7.783v-8.138ZM19.862 25.5v3.042H16.82V25.5h3.042Zm4.661 0v3.042h-3.042V25.5h3.042Zm4.662 0v3.042h-3.042V25.5h3.042Zm-3.279-11.536v4.86h4.267l-4.267-4.86Z'
    }
  />
);

export function AndreForholdIcon(props: IconPropsWithoutSvgPath): JSX.Element {
  return <Icon {...props} svgPath={AndreForholdSVGpath} />;
}
