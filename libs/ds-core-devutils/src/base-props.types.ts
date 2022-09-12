export interface BaseProps {
  id?: string;
  className?: string;
  'data-testid'?: string;
}

export const variantArr = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
] as const;
export type Variant = typeof variantArr[number];

export const sizeArr = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
] as const;
export type Size = typeof sizeArr[number];
