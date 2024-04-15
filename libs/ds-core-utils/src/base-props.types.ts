import { HTMLAttributes } from 'react';

type BasePropsHTMLAttributes = Pick<
  HTMLAttributes<Record<string, never>>,
  'className' | 'id' | 'lang'
>;

export interface BaseProps extends BasePropsHTMLAttributes {
  'data-testid'?: string;
}

export const colorNamesArr = [
  'ochre',
  'forest',
  'burgundy',
  'denim',
  'azure',
  'graphite',
  'white',
  'black',
] as const;

export const sizeArr = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
] as const;
export type Size = (typeof sizeArr)[number];

export const formArrSize = [sizeArr[2], sizeArr[3]] as const;
export type FormSize = (typeof formArrSize)[number];

export const positionArr = [
  'left',
  'right',
  'topStart',
  'topEnd',
  'bottomStart',
  'bottomEnd',
] as const;
export type Position = (typeof positionArr)[number];

export const buttonIconPositionArr = ['left', 'right'] as const;
export type ButtoniConPosition = Extract<Position, 'left' | 'right'>;

export const linkColorArr = ['white'] as const;
export type LinkColor = (typeof linkColorArr)[number];

export const statusArr = ['success', 'neutral', 'warning', 'danger'] as const;
export type Status = (typeof statusArr)[number];

export const headingAsArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingAs = (typeof headingAsArr)[number];

export const subheadingAsArr = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type SubheadingAs = (typeof subheadingAsArr)[number];

export const densityArr = ['standard', 'compact'] as const;
export type Density = (typeof densityArr)[number];

export type FormDiscriminatedRequiredProps =
  | {
      required: true;
      /** Om obligatorisk TextField skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      required?: never | false;
      /** Om obligatorisk TextField skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never | false;
    };
