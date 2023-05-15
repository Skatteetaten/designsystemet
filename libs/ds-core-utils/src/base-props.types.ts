import { HTMLAttributes } from 'react';

type BasePropsHTMLAttributes = Pick<
  HTMLAttributes<Record<string, never>>,
  'className' | 'id' | 'lang'
>;

export interface BaseProps extends BasePropsHTMLAttributes {
  'data-testid'?: string;
}

export const sizeArr = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
] as const;
export type Size = typeof sizeArr[number];

export const positionArr = ['left', 'right'] as const;
export type Position = typeof positionArr[number];

export const linkColorArr = ['white'] as const;
export type LinkColor = typeof linkColorArr[number];
