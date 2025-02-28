import React, { JSX, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ListElement } from '../ListElement/ListElement';

export const listAsArr = ['ul', 'ol'] as const;
export type ListAs = (typeof listAsArr)[number];

export interface ListProps extends BaseProps {
  ref?: Ref<AnyHTMLListElement>;
  /** HTML-tag for listen */
  as?: ListAs;
  /** Margin under listen */
  hasSpacing?: boolean;
  /** Listelementer */
  children?: JSX.Element | JSX.Element[];
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}

export interface ListComponent extends React.FC<ListProps> {
  Element: typeof ListElement;
}

export type AnyHTMLListElement = HTMLOListElement | HTMLUListElement;
