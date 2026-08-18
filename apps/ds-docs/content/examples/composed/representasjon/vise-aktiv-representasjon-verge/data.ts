import { type User } from '@skatteetaten/ds-layout';

export const topBannerUser: User = {
  role: 'andre',
  name: 'Kari Nordmann',
};

export const roleBannerUser = {
  name: 'Kari Nordmann',
  role: 'andre' as const,
  identifier: '01.01.2001',
};
