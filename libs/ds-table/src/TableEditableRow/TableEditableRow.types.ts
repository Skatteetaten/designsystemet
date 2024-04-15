import { ReactNode } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

type EditButtonPosition = Extract<Position, 'left' | 'right'>;
export interface TableEditableRowProps extends BaseProps {
  /**
   * rendrer innholdet i redigeringsmodus
   *
   * @param closeEditing kalles for å lukke raden som redigeres
   */
  editableContent?: (closeEditing: () => void) => ReactNode;
  /**
   * Skal settes til radheader sin id dersom rad er ekspanderbar.
   *  Dette er for å tydeliggjøre hvilken rad som ekspanderes
   */
  editButtonAriaDescribedby?: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  editButtonPosition?: EditButtonPosition;
  /** Callback når redigerknappen trykkes. */
  onEdit?: () => void;
  /** Innhold i raden*/
  children?: ReactNode;
}
