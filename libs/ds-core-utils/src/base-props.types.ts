import { HTMLAttributes } from 'react';

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

type BasePropsHTMLAttributes = Pick<
  HTMLAttributes<Record<string, never>>,
  'className' | 'id' | 'lang'
>;

export interface BaseProps extends BasePropsHTMLAttributes {
  'data-testid'?: string;
}

export const brightnessNamesArr = ['light', 'default'] as const;
export type Brightness = (typeof brightnessNamesArr)[number];

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
export type Color = (typeof colorNamesArr)[number];

export const sizeArr = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'largePlus',
  'extraLarge',
] as const;
export type Size = (typeof sizeArr)[number];

export const formArrSize = [
  'medium',
  'large',
] as const satisfies readonly Size[];
export type FormSize = (typeof formArrSize)[number];

export const positionArr = [
  'left',
  'right',
  'center',
  'topStart',
  'topEnd',
  'bottomStart',
  'bottomEnd',
] as const;
export type Position = (typeof positionArr)[number];

export const linkColorArr = ['white'] as const;
export type LinkColor = (typeof linkColorArr)[number];

export const statusArr = [
  'success',
  'info',
  'warning',
  'error',
  'danger',
] as const;
export type Status = (typeof statusArr)[number];

export const headingAsArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingAs = (typeof headingAsArr)[number];

export const subheadingAsArr = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type SubheadingAs = (typeof subheadingAsArr)[number];

export const densityArr = ['standard', 'compact'] as const;
export type Density = (typeof densityArr)[number];

export const weightArr = ['regular', 'medium', 'bold'] as const;
export type Weight = (typeof weightArr)[number];

export const spacingArr = [
  'xxs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
  'mega',
] as const;
export type Spacing = (typeof spacingArr)[number];

export interface FormRequiredProps {
  required?: boolean;
  /**
   * Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk.
   * @deprecated Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på [stil og tone](https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/).
   */
  showRequiredMark?: boolean;
}
