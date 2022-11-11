import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import ds_Buttons_en_GB from './translations/ds_Buttons_en_GB.json';
import ds_Buttons_nb_NO from './translations/ds_Buttons_nb_NO.json';
import ds_Buttons_nn_NO from './translations/ds_Buttons_nn_NO.json';
import ds_Buttons_se_NO from './translations/ds_Buttons_se_NO.json';

export enum Languages {
  Bokmal = 'nb_NO',
  Nynorsk = 'nn_NO',
  Engelsk = 'en_GB',
  Samisk = 'se_NO',
}

export const resources = {
  en_GB: {
    ds_Buttons: ds_Buttons_en_GB,
  },
  nb_NO: {
    ds_Buttons: ds_Buttons_nb_NO,
  },
  nn_NO: {
    ds_Buttons: ds_Buttons_nn_NO,
  },
  se_NO: {
    ds_Buttons: ds_Buttons_se_NO,
  },
};

export const dsI18n = i18n.createInstance({
  keySeparator: false,
  nsSeparator: ':',
  fallbackLng: false,
  react: {
    useSuspense: false,
  },
  lng: Languages.Bokmal,
  parseMissingKeyHandler: (_key) => '',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});
dsI18n.use(initReactI18next).init();
