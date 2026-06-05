import { dsI18n } from './i18n';

export const getAutoCompletePropDescription = (): string =>
  'Verdien til autoComplete må være "on", "off" eller en av de andre lovlige verdiene beskrevet på <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="msndoc">MDN</a>';
export const getHelpTitleHelpSvgDefault = (): string =>
  dsI18n.t('Shared:shared.Help');
export const getSpinnerLabelDefault = (): string =>
  dsI18n.t('ds_progress:spinner.LoadingLabel');
