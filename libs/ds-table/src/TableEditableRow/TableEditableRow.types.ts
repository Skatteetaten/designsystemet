import { ElementRef, ReactNode, Ref } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

type EditButtonPosition = Extract<Position, 'left' | 'right'>;
export interface TableEditableRowProps extends BaseProps {
  /**
   * Ref til redigeringsknappen. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
   * fokushåndteringen ikke er tilstrekkelig.
   */
  editButtonRef?: Ref<ElementRef<'button'>>;
  /**
   * Ref til innholdet til rad i redigeringsmodus. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
   * fokushåndteringen ikke er tilstrekkelig.
   */
  editableContentRef?: Ref<ElementRef<'span'>>;
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
  /** Innhold i raden */
  children?: ReactNode;
}
