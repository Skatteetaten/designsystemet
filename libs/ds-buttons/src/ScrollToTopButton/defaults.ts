import { dsI18n } from '@skatteetaten/ds-core-utils';

export const getVisibilityThresholdDefault = (): number => 1;
export const getScrollToMainDefault = (): boolean => true;
export const getScrollToTopButtonTextDefault = (): string =>
  dsI18n.t('ds_buttons:scrolltotopbutton.Title');
