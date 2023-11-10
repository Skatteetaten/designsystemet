import { BaseProps, sizeArr } from '@skatteetaten/ds-core-utils';

export const spinnerSizeArr = [sizeArr[1], sizeArr[2], sizeArr[3]] as const;
export type SpinnerSize = (typeof spinnerSizeArr)[number];
export const spinnerColorArr = ['white', 'black', 'blue'] as const;
export type SpinnerColor = (typeof spinnerColorArr)[number];

export const spinnerPositionArr = ['right', 'bottom'] as const;
export type SpinnerTitlePostion = (typeof spinnerPositionArr)[number];

export interface SpinnerProps extends BaseProps {
  /** Farge på spinneren */
  color?: SpinnerColor;
  /** Posisjon på ledeteksten */
  titlePosition?: SpinnerTitlePostion;
  /** Størrelse på spinneren */
  size?: SpinnerSize;
  /** Ledetekst for spinneren */
  children?: string;
  /** Skjuler ledetekst, men er fortsatt synlig for skjermleser. */
  hideTitle?: boolean;
}
