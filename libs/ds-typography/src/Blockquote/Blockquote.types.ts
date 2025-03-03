import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BlockquoteProps extends BaseProps {
  ref?: Ref<HTMLQuoteElement>;
  /** Tekst og markup for sitatet */
  children: ReactNode;
  /** Margin under sitatet */
  hasSpacing?: boolean;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}
