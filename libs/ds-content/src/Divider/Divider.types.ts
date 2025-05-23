import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps, spacingArr } from '@skatteetaten/ds-core-utils';

export const dividerSpacingArr = [...spacingArr, 'none'] as const;

export type DividerSpacing = (typeof dividerSpacingArr)[number];

export interface DividerProps extends BaseProps {
  ref?: Ref<HTMLHRElement>;
  /**
   * Bestemmer avstanden over divider.
   */
  spacingTop?: DividerSpacing;
  /**
   * Bestemmer avstanden under divider.
   */
  spacingBottom?: DividerSpacing;
  /**
   * Angir om divider skal vises med en subtil/dempet stil med 50% gjennomsiktighet.
   */
  subtle?: boolean;
  /**
   * Skal divider skjules for skjermlesere.
   */
  ariaHidden?: ComponentPropsWithoutRef<'hr'>['aria-hidden'];
}
