import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ListElementProps } from './ListElement.types';

export const listAsArr = ['ul', 'ol'] as const;
export type ListAs = typeof listAsArr[number];

export interface ListProps extends BaseProps {
  /** HTML-tag for listen */
  as?: ListAs;
  /** Innrykk foran listen */
  hasIndent?: boolean;
  /** Margin under listen */
  hasSpacing?: boolean;
  /** Listelementer */
  children?: JSX.Element | JSX.Element[];
}

export interface ListComponent
  extends React.ForwardRefExoticComponent<
    ListProps & React.RefAttributes<AnyHTMLListElement>
  > {
  Element: React.ForwardRefExoticComponent<
    ListElementProps & React.RefAttributes<HTMLLIElement>
  >;
}

export type AnyHTMLListElement = HTMLOListElement | HTMLUListElement;
