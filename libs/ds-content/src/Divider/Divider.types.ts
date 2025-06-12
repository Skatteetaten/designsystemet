import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps, spacingArr } from '@skatteetaten/ds-core-utils';

export const dividerSpacingArr = [...spacingArr, 'none'] as const;

export type DividerSpacing = (typeof dividerSpacingArr)[number];

export type DividerVariant = 'subtle' | 'strong';

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
   * Definerer stilen til divider: subtil/dempet stil med 50% gjennomsiktighet (standard) eller sterk uten gjennomsiktighet.
   */
  variant?: DividerVariant;
  /**
   * Bestemmer om divider skjules for skjermlesere.
   */
  ariaHidden?: ComponentPropsWithoutRef<'hr'>['aria-hidden'];
}
