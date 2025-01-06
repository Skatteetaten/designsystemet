import { ReactElement } from 'react';

import { HeadingAs } from '@skatteetaten/ds-core-utils';
import {
  ErrorSVGpath,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { CardNoteVariant } from './CardNote.types';

export const getCardNoteVariantDefault = (): CardNoteVariant => 'warning';
export const getCardNoteSvgPathDefault = (
  variant: CardNoteVariant
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

export const getCardNoteTitleAsDefault = (): HeadingAs => 'h3';
