import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import Felles_en_GB from './translations/Felles_en_GB.json';
import Felles_nb_NO from './translations/Felles_nb_NO.json';
import Felles_nn_NO from './translations/Felles_nn_NO.json';
import Felles_se_NO from './translations/Felles_se_NO.json';

export enum Languages {
  Bokmal = 'nb_NO',
  Nynorsk = 'nn_NO',
  Engelsk = 'en_GB',
  Samisk = 'se_NO',
}

export const resources = {
  en_GB: {
    Felles: Felles_en_GB,
  },
  nb_NO: {
    Felles: Felles_nb_NO,
  },
  nn_NO: {
    Felles: Felles_nn_NO,
  },
  se_NO: {
    Felles: Felles_se_NO,
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
