import { Ref } from 'react';

import { BaseProps, Color, Size } from '@skatteetaten/ds-core-utils';

export type SpinnerSize = Extract<
  Size,
  'small' | 'medium' | 'large' | 'extraLarge'
>;

export type SpinnerColor = Extract<Color, 'white' | 'black'> | 'interactive';

export const spinnerPositionArr = ['right', 'bottom'] as const;
export type SpinnerTitlePostion = (typeof spinnerPositionArr)[number];

export interface SpinnerProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
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
  classNames?: {
    container?: string;
    animation?: string;
    title?: string;
  };
  /** Spinner med prosent. 0-100 */
  percentComplete?: number;
}
