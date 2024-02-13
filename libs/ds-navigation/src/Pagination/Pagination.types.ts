import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface PaginationProps extends BaseProps {
  /** Gjeldende side */
  currentPage: number;
  /** Antall elementer pr side */
  listLength: number;
  /** Totalt antall elementer i liste */
  listTotalLength: number;
  /** Maksumum antall navigasjonselementer ved siden av aktiv side */
  sibling?: number;
  /** Skjul next/prev label */
  hidePrevNextButtonTitle?: boolean;
  /** Sjul pagesummary */
  hidePageSummary?: boolean;
  /** callback når endring av sidenummer.  */
  onChange: (page: number) => void;
}
