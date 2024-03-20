import { RefObject } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface PaginationCommonProps extends BaseProps {
  /** Antall elementer pr side */
  pageSize?: number;
  /** Totalt antall elementer i liste */
  totalItems: number;
  /** Maksimum antall navigasjonselementer ved siden av aktiv side. Minimumsverdi er 1 sibling */
  sibling?: number;
  /** Skjul next/prev label */
  hidePrevNextButtonTitle?: boolean;
  /** Skjul område pagesummary */
  hidePageSummary?: boolean;
  /**
   * Hvis mer enn én komponent pr side så må denne propen sette på minst én av komponentene.
   * aria-label brukes på nav-elementet. Tekst endres hvis språk endres
   */
  ariaLabel?: string;
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
       * Setter initiell aktiv side hvis komponenten er uncontrolled.
       * Eksluderer samtidig bruk av currentPage
       */
      defaultCurrent?: never;
    }
  | {
      /** Gjeldende side. Bruk av currentPage ekskluderer bruk av defaultCurrentPage */
      currentPage?: never;
      /**
       * Setter initiell aktiv side hvis komponenten er uncontrolled.
       * Eksluderer samtidig bruk av currentPage
       */
      defaultCurrent?: number;
    };

export type PaginationProps = PaginationCommonProps &
  PaginationDiscriminatedProp;

export type PageOption = {
  currentPage: number | undefined;
  defaultCurrent: number | undefined;
  onChange?: (page: number) => void;
};

export type PaginationListProps = {
  firstPageRef?: RefObject<HTMLButtonElement>;
  lastPageRef?: RefObject<HTMLButtonElement>;
  lastPage: number;
  internalPage: number;
  sibling: number;
  handleChange: (page: number) => void;
};
