import {
  dsI18n,
  formatNationalIdentityNumber,
} from '@skatteetaten/ds-core-utils';

import { Person } from './RolePicker.types';

export const getPersonDescription = ({
  dateOfBirth,
  personId,
}: Person): string => {
  const { t, language } = dsI18n;

  const locale = language === 'en_GB' ? 'en-GB' : 'no-NO';

  const dateFormat: Intl.DateTimeFormatOptions =
    locale === 'en-GB'
      ? { day: 'numeric', month: 'long', year: 'numeric' }
      : { day: '2-digit', month: '2-digit', year: 'numeric' };

  if (!dateOfBirth) {
    return `${t('ds_overlays:rolepicker.PeopleDescriptionPrefix')} ${formatNationalIdentityNumber(personId)}`;
  }
  return `${t('ds_overlays:rolepicker.DateOfBirth')} ${dateOfBirth.toLocaleDateString(
    locale,
    dateFormat
  )}`;
};
