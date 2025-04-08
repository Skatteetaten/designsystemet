import { ReactElement } from 'react';

import { HeadingAs } from '@skatteetaten/ds-core-utils';
import {
  InfoSquareSVGpath,
  WarningStopSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { CardAlertVariant } from './CardAlert.types';

export const getCardAlertVariantDefault = (): CardAlertVariant => 'warning';
export const getCardAlertSvgPathDefault = (
  variant: CardAlertVariant
): ReactElement<SVGPathElement> => {
  switch (variant) {
    case 'warning':
      return WarningSVGpath;
    case 'danger':
      return WarningStopSVGpath;
    case 'info':
    default:
      return InfoSquareSVGpath;
  }
};

export const getCardAlertTitleAsDefault = (): HeadingAs => 'h3';
