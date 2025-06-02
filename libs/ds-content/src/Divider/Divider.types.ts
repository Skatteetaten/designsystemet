import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps, spacingArr } from '@skatteetaten/ds-core-utils';

export const dividerSpacingArr = [...spacingArr, 'none'] as const;

export type DividerSpacing = (typeof dividerSpacingArr)[number];

export type DividerVariant = 'default' | 'subtle';

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
   * Definerer stilen til divider: sort farge som default eller en subtil/dempet stil med 50% gjennomsiktighet.
   */
  variant?: DividerVariant;
  /**
   * Skal divider skjules for skjermlesere.
   */
  ariaHidden?: ComponentPropsWithoutRef<'hr'>['aria-hidden'];
}
