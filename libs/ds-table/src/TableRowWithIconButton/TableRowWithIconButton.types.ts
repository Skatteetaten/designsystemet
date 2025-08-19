import { ReactElement, ReactNode, RefObject } from 'react';

import { IconButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

import {
  RowWithExpandButtonHandle,
  TableContextProps,
} from '../Table/Table.types';

export interface ExpandableRowProps extends BaseProps {
  ref?: RefObject<RowWithExpandButtonHandle | null>;
  /** Overstyring av standard title/tekst for utvidelsesknappen. Default title er "Mer informasjon" (når showExpandButtonTitle er false). Når showExpandButtonTitle er satt til true, vises teksten "Detaljer" som default. */
  expandButtonTitle?: string;
  /** Innholdet som vises når raden er utvidet. Hvis det ekspanderte innholdet skal være flere tabelrader som skal aligneres med resten av tabellen så må radene ikke wrappes i React.Fragment, istedet kan de sendes inn som array. */
  expandableContent?: ReactNode;
  /** Om utvidelsesknappen skal ha synlig tekst. */
  showExpandButtonTitle?: boolean;
  /** Skal settes til radheader sin id dersom rad er ekspanderbar. Dette er for å tydeliggjøre hvilken rad som ekspanderes. */
  expandButtonAriaDescribedby?: string;
  /** Brukes til å styre ekspandert tilstand utenfor komponenten. */
  isExpanded?: boolean;
  /** Innholdet i raden. Bruk Table.DataCell for celler. */
  children?: ReactNode;
  classNames?: { expandedContent?: string };
  context: TableContextProps | null;
  svgPath: ReactElement<SVGPathElement>;
  hideIconButton?: boolean;
  iconButtonAriaExpanded?: IconButtonProps['ariaExpanded'];
  isExpandButtonDisabled?: boolean;
  onExpandClick: () => void;
}
