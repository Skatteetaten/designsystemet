import { resources } from '@skatteetaten/ds-core-utils/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['nb_NO'];
    keySeparator: '>';
    nsSeparator: ':';
  }
}
