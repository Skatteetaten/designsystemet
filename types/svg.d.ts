import { FunctionComponent, SVGProps } from 'react';

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
