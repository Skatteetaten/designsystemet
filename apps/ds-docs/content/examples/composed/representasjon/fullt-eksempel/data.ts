import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1984-02-13'),
  type: 'Person',
};

export const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      dateOfBirth: new Date('1964-02-28'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1932-10-10'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1944-01-26'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1981-07-04'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export const businesses: Paginated<Business> = {
  total: 3,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Amazon ASA',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ASA',
    },
  ],
};

export const loggedInLinks = [
  {
    href: '/person',
    text: 'Min side',
  },
  {
    href: '/web/mineskatteforhold/',
    text: 'Skatt',
  },
  {
    href: '/web/minfolkeregisterside/',
    text: 'Folkeregister',
  },
  {
    href: '/web/innboks/',
    text: 'Innboks',
  },
  {
    href: '/person/sakstatus',
    text: 'Mine saker',
  },
  {
    href: '/person/kravoversikt',
    text: 'Krav og betaling',
  },
  {
    href: '/web/desta/',
    text: 'Bil og andre kjøretøy',
  },
  {
    href: '/person/arbeidinntekt',
    text: 'Arbeid og inntekt',
  },
  {
    href: '/web/aksjeoppgaven/?referrer=min-side',
    text: 'Aksjeoppgaven',
  },
  {
    href: '/person/eiendommer',
    text: 'Eiendommer',
  },
];

export const personLinks = [
  {
    href: 'https://www.skatteetaten.no/person/skatt/',
    text: 'Skatt',
  },
  {
    href: 'https://www.skatteetaten.no/person/avgifter/',
    text: 'Avgifter',
  },
  {
    href: 'https://www.skatteetaten.no/person/folkeregister/',
    text: 'Folkeregisteret',
  },
  {
    href: 'https://www.skatteetaten.no/person/utenlandsk/',
    text: 'Utenlandsk',
  },
  {
    href: 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
    text: 'Betaling og innkreving',
  },
];

export const virksomhetLinks = [
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
    text: 'Skatt',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
    text: 'Avgifter',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
    text: 'Rapportering og bransjer',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
    text: 'Starte, drive og avslutte',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
    text: 'Arbeidsgiver',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
    text: 'Utenlandsk',
  },
];

export const virksomhetMinsideLinks = [
  {
    href: 'web/minside/virksomhet/',
    text: 'Min side',
  },
  {
    href: '/virksomhet/kalender',
    text: 'Kalender',
  },
  {
    href: '/virksomhet/kravoversikt',
    text: 'Krav og betaling',
  },
  {
    href: '/virksomhet/sakstatus',
    text: 'Mine saker',
  },
  {
    href: '/web/innboks/',
    text: 'Innboks',
  },
];

export const searchSuggestions = [
  'Se skatteoppgjøret ditt',
  'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift',
  'Se dine skattekrav og betalinger',
];

export const pageLinks = {
  person: 'https://www.skatteetaten.no/person/',
  virksomhet: 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
  rettskilder: 'https://www.skatteetaten.no/rettskilder/',
  presse: 'https://www.skatteetaten.no/presse/',
  samarbeidspartnere: 'https://www.skatteetaten.no/samarbeidspartnere/',
  kontakt: 'https://www.skatteetaten.no/kontakt/',
} as const;
