import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface PaginationCommonProps extends BaseProps {
  /** Antall elementer pr side */
  listLength?: number;
  /** Totalt antall elementer i liste */
  listTotalLength: number;
  /** Maksiumum antall navigasjonselementer ved siden av aktiv side. Minimusverdi er 1 sibling */
  sibling?: number;
  /** Skjul next/prev label */
  hidePrevNextButtonTitle?: boolean;
  /** Skjul område pagesummary */
  hidePageSummary?: boolean;
  /**
   * callback når endring av sidenummer.
   * Ikke required, men gir ikke mening at en komponent skal endres til en annen page
   * uten at det påvirker "noe" utenfor
   */
  onChange?: (page: number) => void;
}

type PaginationDiscriminatedProp =
  | {
      /** Gjeldende side. Bruk av currentPage ekskluderer bruk av defaultCurrentPage */
      currentPage?: number;
      /**
       * setter initiell aktiv side hvis komponenten er uncontrolled.
       * Eksluderer samtidig bruk av currentPage
       */
      defaultCurrentPage?: never;
    }
  | {
      /** Gjeldende side. Bruk av currentPage ekskluderer bruk av defaultCurrentPage */
      currentPage?: never;
      /**
       * setter initiell aktiv side hvis komponenten er uncontrolled.
       * Eksluderer samtidig bruk av currentPage
       */
      defaultCurrentPage?: number;
    };

export type PaginationProps = PaginationCommonProps &
  PaginationDiscriminatedProp;
