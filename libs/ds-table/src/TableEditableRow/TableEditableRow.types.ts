import { ReactNode } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

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
  editButtonPosition?: Position;
  /** Callback når redigerknappen trykkes. */
  onEdit?: () => void;
  /** Innhold i raden*/
  children?: ReactNode;
}
