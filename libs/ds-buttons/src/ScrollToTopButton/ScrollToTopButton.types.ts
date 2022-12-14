import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ScrollToTopButtonProps extends BaseProps {
  classNames?: {
    container?: string;
    button?: string;
    iconContainer?: string;
    icon?: string;
    label?: string;
  };
  /**
   * Focus settes til main elmementet når knappen klikkes.
   * Dersom main befinner seg i en shadow-DOM så må shadowRootNode angis for at fokus skal settes riktig.
   */
  shadowRootNode?: Document | ShadowRoot;
  /** Antall piksler man må scrolle før knappen synes. 0 gir alltid synlig knapp. */
  visibilityThreshold?: number;
  /** Tekst på knapp. */
  children?: string;
}
