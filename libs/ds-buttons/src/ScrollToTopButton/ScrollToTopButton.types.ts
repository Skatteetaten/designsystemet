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
   * Focus settes til main elementet når knappen klikkes.
   * Dersom main befinner seg i en shadow-DOM så må shadowRootNode angis for at fokus skal settes riktig.
   */
  shadowRootNode?: Document | ShadowRoot;
  /** Antall piksler man må scrolle før knappen synes. 0 gir alltid synlig knapp. */
  visibilityThreshold?: number;
  /**
   * om det ikke skal scrolles til eventuelt eksisterende første main-element etter at det er scrollet til topp.
   * Hvis main-element finnes så vil det uansett alltid få fokus: mainElement.focus({ preventScroll: true | false })
   * Se https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#preventscroll
   */
  scrollToMain?: boolean;
  /** Tekst på knapp. */
  children?: string;
}
