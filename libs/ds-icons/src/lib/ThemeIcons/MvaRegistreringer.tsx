import Icon from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const MvaRegistreringerSVGpath = (
  <path
    d={
      'M13.2 11.9h2.6v8.3h16.3v-8.3h2.6l2 16.8 2.4-.3L37 9.6h-4.8V4.8H15.8v4.8H11L8.8 28.4l2.4.3 2-16.8Zm4.5-5.2h12.5v11.5H17.7V6.7Zm14.4 19.7H15.8v2.1h16.3v-2.1Zm0-4.2H15.8v2.1h16.3v-2.1Zm7.5 8.4c.2 0 .5.1.6.3.1.2.2.5.1.7l-3.5 10.6c-.2.6-.8 1-1.4 1H12.6c-.7 0-1.2-.4-1.4-1L7.7 31.6c-.1-.2 0-.5.1-.7.1-.2.4-.3.6-.3h31.2Zm-19.7 4.2h8.3v-2.1h-8.3v2.1Zm1.9-26.3c1 .1 1.8 1 1.7 2.1v.4c-.1 1-1.1 1.8-2.1 1.7-1-.1-1.8-1-1.7-2.1v-.4c.1-1 1.1-1.8 2.1-1.7Zm-.3.9c-.4 0-.6.5-.6 1.2s.2 1.2.6 1.2c.4 0 .6-.5.6-1.2s-.2-1.2-.6-1.2Zm.1 6.4 3.8-7.1h1l-3.9 7.1h-.9Zm2.9-2.1c0-1 .8-1.9 1.9-1.9h.3c1.1.1 1.8 1.1 1.7 2.1v.3c-.1 1.1-1 1.9-2.1 1.8-1.1-.1-1.9-1-1.8-2.1v-.2Zm1.3.2c0 .7.1 1.2.6 1.2s.6-.5.6-1.2-.2-1.2-.6-1.2c-.4 0-.6.5-.6 1.2Z'
    }
  />
);

export function MvaRegistreringerIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={MvaRegistreringerSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}
