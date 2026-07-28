import { formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import { type User } from '@skatteetaten/ds-layout';

export const topBannerUser: User = {
  role: 'virksomhet',
  name: 'Nordmann Drift AS',
  orgnr: '923456789',
};

export const roleBannerUser = {
  name: 'Nordmann Drift AS',
  role: 'virksomhet' as const,
  identifier: formatOrganisationNumber(topBannerUser.orgnr ?? '923456789'),
};
