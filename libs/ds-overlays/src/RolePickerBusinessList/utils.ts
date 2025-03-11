import { dsI18n } from '@skatteetaten/ds-core-utils';

import { Business } from '../RolePicker/RolePicker.types';

const unitTypesToHide = [
  'AS',
  'DA',
  'ANS',
  'ASA',
  'SE',
  'BA',
  'SA',
  'SCE',
  'STI',
  'IKS',
  'KF',
  'FKF',
  'RHF',
  'HF',
  'NUF',
];

export const getBusinessTitle = (business: Business): string => {
  let title = business.name;
  if (!unitTypesToHide.includes(business.unitType)) {
    title += ` ${business.unitType}`;
  }

  if (business.isDeleted) {
    title += ` (${dsI18n.t('ds_overlays:rolepicker.Deleted')})`;
  }

  return title;
};
