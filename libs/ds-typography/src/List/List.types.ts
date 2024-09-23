import { ForwardRefExoticComponent, RefAttributes, JSX } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ListElementProps } from '../ListElement/ListElement.types';

export const listAsArr = ['ul', 'ol'] as const;
export type ListAs = (typeof listAsArr)[number];

export interface ListProps extends BaseProps {
  /** HTML-tag for listen */
  as?: ListAs;
  /** Margin under listen */
  hasSpacing?: boolean;
  /** Listelementer */
  children?: JSX.Element | JSX.Element[];
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}

export interface ListComponent
  extends ForwardRefExoticComponent<
    ListProps & RefAttributes<AnyHTMLListElement>
  > {
  Element: ForwardRefExoticComponent<
    ListElementProps & RefAttributes<HTMLLIElement>
  >;
}

export type AnyHTMLListElement = HTMLOListElement | HTMLUListElement;
