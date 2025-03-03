import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TopBannerSkipLinkProps extends BaseProps {
  ref?: Ref<HTMLAnchorElement>;
  /** Overskriver default lenketekst */
  children?: string;
  /** Overskriver default target verdi som focus skal settes til når skipLink trykkes på */
  target?: string;
  /**
   * Focus settes default til main elementet når skipLink klikkes.
   * Dersom main befinner seg i en shadow-DOM så må shadowRootNode angis for at fokus skal settes riktig.
   */
  shadowRootNode?: Document | ShadowRoot;
}
