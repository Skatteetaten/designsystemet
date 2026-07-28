import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
  type: 'Person',
};

export const businesses: Paginated<Business> = {
  total: 2,
  list: [
    {
      name: 'Nordmann Konsulenttjenester',
      organizationNumber: '912345678',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
    {
      name: 'Nordmann Drift AS',
      organizationNumber: '923456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
  ],
};
