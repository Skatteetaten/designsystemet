import { resources } from '../libs/ds-core-utils/src/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['nb_NO'];
    keySeparator: '>';
    nsSeparator: ':';
  }
}
