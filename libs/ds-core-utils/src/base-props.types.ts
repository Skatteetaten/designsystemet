import { HTMLAttributes } from 'react';

type BasePropsHTMLAttributes = Pick<
  HTMLAttributes<Record<string, never>>,
  'className' | 'id'
>;
export interface BaseProps extends BasePropsHTMLAttributes {
  'data-testid'?: string;
}

export const variantArr = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
] as const;
export type Variant = typeof variantArr[number];

export const iconVariantArr = ['systemIcon', 'themeIcon'] as const;
export type IconVariant = typeof iconVariantArr[number];

export const sizeArr = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
] as const;
export type Size = typeof sizeArr[number];

export const positionArr = ['left', 'right'] as const;
export type Positon = typeof positionArr[number];
