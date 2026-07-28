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
  total: 12,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
        {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF',
        },
      ],
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
      ],
    },
    {
      name: 'Samsung DA',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'DA',
    },
    {
      name: 'Vanguard AS',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
  ],
};

const peopleBase: Paginated<Person> = {
  total: 11,
  list: [
    {
      name: 'Frisk Elefant',
      personId: '10090812345',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Melankolsk Aldrende Ape',
      personId: '13889999726',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Kari Nordmann',
      personId: '10101054321',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export const peopleWithDeceased: Paginated<Person> = {
  ...peopleBase,
  list: peopleBase.list.map((person, index) => ({
    ...person,
    isDeleted: index % 2 === 0,
  })),
};
