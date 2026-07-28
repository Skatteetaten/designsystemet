import { type User } from '@skatteetaten/ds-layout';
import { type Business, type Paginated } from '@skatteetaten/ds-overlays';

export const businesses: Paginated<Business> = {
  total: 3,
  list: [
    {
      name: 'Nordmann Drift',
      organizationNumber: '923456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Nordmann Konsult',
      organizationNumber: '823456111',
      isDeleted: false,
      unitType: 'DA',
      type: 'Organization',
    },
    {
      name: 'Nordmann Transport',
      organizationNumber: '723456222',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
  ],
};

export const mapBusinessToUser = (
  name: string,
  organizationNumber: string
): User => ({
  role: 'virksomhet',
  name,
  orgnr: organizationNumber,
});
