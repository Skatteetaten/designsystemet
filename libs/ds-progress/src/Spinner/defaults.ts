//export const getSpinnerColorDefault = () =>
import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  SpinnerColor,
  SpinnerTitlePostion,
  SpinnerSize,
} from './Spinner.types';

export const getSpinnerTitlePositionDefault = (): SpinnerTitlePostion =>
  'bottom';
export const getSpinnerSizeDefault = (): SpinnerSize => 'medium';
export const getSpinnerColorDefault = (): SpinnerColor => 'black';
export const getSpinnerLabelDefault = (): string =>
  dsI18n.t('ds_progress:spinner.LoadingLabel');
