import { ReactElement } from 'react';

import { HeadingAs } from '@skatteetaten/ds-core-utils';
import {
  ErrorSVGpath,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { CardAlertVariant } from './CardAlert.types';

export const getCardAlertVariantDefault = (): CardAlertVariant => 'warning';
export const getCardAlertSvgPathDefault = (
  variant: CardAlertVariant
): ReactElement => {
  switch (variant) {
    case 'warning':
      return ErrorSVGpath;
    case 'danger':
      return WarningSVGpath;
    case 'neutral':
    default:
      return InfoSVGpath;
  }
};

export const getCardAlertTitleAsDefault = (): HeadingAs => 'h3';
