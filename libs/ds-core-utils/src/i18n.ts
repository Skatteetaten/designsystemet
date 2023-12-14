import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import ds_alerts_en_GB from './translations/ds-alerts_en_GB.json';
import ds_alerts_nb_NO from './translations/ds-alerts_nb_NO.json';
import ds_alerts_nn_NO from './translations/ds-alerts_nn_NO.json';
import ds_alerts_se_NO from './translations/ds-alerts_se_NO.json';
import ds_buttons_en_GB from './translations/ds-buttons_en_GB.json';
import ds_buttons_nb_NO from './translations/ds-buttons_nb_NO.json';
import ds_buttons_nn_NO from './translations/ds-buttons_nn_NO.json';
import ds_buttons_se_NO from './translations/ds-buttons_se_NO.json';
import ds_collections_en_GB from './translations/ds-collections_en_GB.json';
import ds_collections_nb_NO from './translations/ds-collections_nb_NO.json';
import ds_collections_nn_NO from './translations/ds-collections_nn_NO.json';
import ds_collections_se_NO from './translations/ds-collections_se_NO.json';
import ds_forms_en_GB from './translations/ds-forms_en_GB.json';
import ds_forms_nb_NO from './translations/ds-forms_nb_NO.json';
import ds_forms_nn_NO from './translations/ds-forms_nn_NO.json';
import ds_forms_se_NO from './translations/ds-forms_se_NO.json';
import ds_layout_en_GB from './translations/ds-layout_en_GB.json';
import ds_layout_nb_NO from './translations/ds-layout_nb_NO.json';
import ds_layout_nn_NO from './translations/ds-layout_nn_NO.json';
import ds_layout_se_NO from './translations/ds-layout_se_NO.json';
import ds_overlays_en_GB from './translations/ds-overlays_en_GB.json';
import ds_overlays_nb_NO from './translations/ds-overlays_nb_NO.json';
import ds_overlays_nn_NO from './translations/ds-overlays_nn_NO.json';
import ds_overlays_se_NO from './translations/ds-overlays_se_NO.json';
import ds_status_en_GB from './translations/ds-status_en_GB.json';
import ds_status_nb_NO from './translations/ds-status_nb_NO.json';
import ds_status_nn_NO from './translations/ds-status_nn_NO.json';
import ds_status_se_NO from './translations/ds-status_se_NO.json';
import ds_tables_en_GB from './translations/ds-tables_en_GB.json';
import ds_tables_nb_NO from './translations/ds-tables_nb_NO.json';
import ds_tables_nn_NO from './translations/ds-tables_nn_NO.json';
import ds_tables_se_NO from './translations/ds-tables_se_NO.json';
import Shared_en_GB from './translations/Shared_en_GB.json';
import Shared_nb_NO from './translations/Shared_nb_NO.json';
import Shared_nn_NO from './translations/Shared_nn_NO.json';
import Shared_se_NO from './translations/Shared_se_NO.json';

export enum Languages {
  Bokmal = 'nb_NO',
  Nynorsk = 'nn_NO',
  Engelsk = 'en_GB',
  Samisk = 'se_NO',
}

export const langToLocale: { [key: string]: Languages } = {
  nb: Languages.Bokmal,
  nn: Languages.Nynorsk,
  en: Languages.Engelsk,
  se: Languages.Samisk,
};

export const resources = {
  en_GB: {
    Shared: Shared_en_GB,
    ds_alerts: ds_alerts_en_GB,
    ds_buttons: ds_buttons_en_GB,
    ds_collections: ds_collections_en_GB,
    ds_forms: ds_forms_en_GB,
    ds_layout: ds_layout_en_GB,
    ds_overlays: ds_overlays_en_GB,
    ds_status: ds_status_en_GB,
    ds_tables: ds_tables_en_GB,
  },
  nb_NO: {
    Shared: Shared_nb_NO,
    ds_alerts: ds_alerts_nb_NO,
    ds_buttons: ds_buttons_nb_NO,
    ds_collections: ds_collections_nb_NO,
    ds_forms: ds_forms_nb_NO,
    ds_layout: ds_layout_nb_NO,
    ds_overlays: ds_overlays_nb_NO,
    ds_status: ds_status_nb_NO,
    ds_tables: ds_tables_nb_NO,
  },
  nn_NO: {
    Shared: Shared_nn_NO,
    ds_alerts: ds_alerts_nn_NO,
    ds_buttons: ds_buttons_nn_NO,
    ds_collections: ds_collections_nn_NO,
    ds_forms: ds_forms_nn_NO,
    ds_layout: ds_layout_nn_NO,
    ds_overlays: ds_overlays_nn_NO,
    ds_status: ds_status_nn_NO,
    ds_tables: ds_tables_nn_NO,
  },
  se_NO: {
    Shared: Shared_se_NO,
    ds_alerts: ds_alerts_se_NO,
    ds_buttons: ds_buttons_se_NO,
    ds_collections: ds_collections_se_NO,
    ds_forms: ds_forms_se_NO,
    ds_layout: ds_layout_se_NO,
    ds_overlays: ds_overlays_se_NO,
    ds_status: ds_status_se_NO,
    ds_tables: ds_tables_se_NO,
  },
};

export const dsI18n = i18n.createInstance({
  keySeparator: false,
  nsSeparator: ':',
  fallbackLng: 'nb_NO',
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
