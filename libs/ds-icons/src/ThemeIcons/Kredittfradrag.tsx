import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const KredittfradragSVGpath = (
  <path
    d={
      'M23.1 6.043v8.143a9.765 9.765 0 0 0-8.743 9.728c0 5.4 4.372 9.772 9.772 9.772a9.64 9.64 0 0 0 6.128-2.186L36 37.2c-3.171 2.829-7.329 4.543-11.871 4.543-9.858 0-17.872-8.014-17.872-17.872 0-9.514 7.457-17.314 16.843-17.828Zm18.9 18.9c-.257 4.114-1.929 7.886-4.5 10.8L31.757 30c1.157-1.414 1.886-3.129 2.1-5.057H42Zm-14.657-1.5c1.328 0 2.271.986 2.271 2.571 0 1.586-.943 2.572-2.271 2.572-1.329 0-2.272-1.029-2.272-2.572 0-1.585.986-2.571 2.272-2.571Zm-.086-3.943-4.543 8.871H21.6l4.543-8.871h1.114Zm.086 4.929c-.6 0-.9.642-.9 1.585 0 .9.3 1.586.9 1.586.6-.043.9-.686.9-1.586 0-.943-.3-1.585-.9-1.585Zm-5.829-5.1c1.329 0 2.272.985 2.272 2.571 0 1.586-.943 2.571-2.272 2.571-1.285 0-2.271-1.028-2.271-2.571 0-1.586.986-2.571 2.271-2.571Zm0 .985c-.6 0-.9.643-.9 1.586 0 .9.3 1.586.9 1.586.643 0 .9-.643.9-1.586 0-.943-.3-1.586-.9-1.586ZM25.2 6.043c9 .514 16.243 7.757 16.757 16.8h-8.1c-.471-4.586-4.114-8.229-8.657-8.7v-8.1Zm1.757 1.971V12.6a11.598 11.598 0 0 1 8.4 8.4h4.586c-1.157-6.6-6.386-11.829-12.986-12.986Z'
    }
  />
);

export function KredittfradragIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return (
    <Icon
      {...props}
      svgPath={KredittfradragSVGpath}
      size={'medium'}
      variant={'themeIcon'}
    />
  );
}