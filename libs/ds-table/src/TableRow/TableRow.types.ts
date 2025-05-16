import { ReactNode, Ref } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

type ExpandButtonPosition = Extract<Position, 'left' | 'right'>;

export interface TableRowProps extends BaseProps {
  ref?: Ref<HTMLTableRowElement>;
  /** Overstyring av standard title for expandButton */
  expandButtonTitle?: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  expandButtonPosition?: ExpandButtonPosition;
  /**
   * Innholdet som vises når raden er utvidet
   * Hvis det ekspanderte innholdet skal være flere tabelrader som skal aligneres med resten av tabellen så må radene
   * ikke wrappes i React.Fragment. I stedet kan de sendes inn som array.
   */
  expandableContent?: ReactNode;
  /**
   * Skal settes til radheader sin id dersom rad er ekspanderbar.
   *  Dette er for å tydeliggjøre hvilken rad som ekspanderes
   */
  expandButtonAriaDescribedby?: string;
  /** Overstyring av standard tekst ved siden av utvid-knappen */
  expandButtonText?: string;
  /** Om utvid-knappen skal ha synlig tekst */
  showExpandButtonText?: boolean;
  /** Avgjør om raden kan utvides */
  isExpandable?: boolean;
  /** Brukes til å styre ekspandert tilstand utenfor komponenten */
  isExpanded?: boolean;
  /** callback når raden utvides */
  onExpand?: () => void;
  /** callback når raden lukkes */
  onClose?: () => void;
  /**  Innholdet i raden  */
  children?: ReactNode;
}
