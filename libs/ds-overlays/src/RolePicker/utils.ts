import { formatter } from '@skatteetaten/ds-core-utils';

export const formatOrganisationNumber = (
  organisationNumber: string
): string => {
  const result = formatter({
    type: 'organisationNumber',
    value: organisationNumber,
  });

  return result.value;
};

export const formatNationalIdentityNumber = (
  nationalIdentityNumber: string
): string => {
  const result = formatter({
    type: 'nationalIdentityNumber',
    value: nationalIdentityNumber,
  });

  return result.value;
};
