import { useState } from 'react';

import {
  Pagination,
  getDefaultListLength,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from '@skatteetaten/ds-navigation';
import { List } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const data = [
  {
    navn: 'Donald Duck',
    dato: '25.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Robbie Wiliams',
    dato: '25.03.15',
    type: 'Admin',
  },
  {
    navn: 'Minnie Mouse',
    dato: '12.05.18',
    type: 'Bruker',
  },
  {
    navn: 'Katy Perry',
    dato: '01.01.23',
    type: 'Admin',
  },
  {
    navn: 'Langbein',
    dato: '14.02.22',
    type: 'Bruker',
  },
  {
    navn: 'Justin Bieber',
    dato: '08.03.19',
    type: 'Bruker',
  },
  {
    navn: 'Daisy Duck',
    dato: '07.04.21',
    type: 'Bruker',
  },
  {
    navn: 'Ed Sheeran',
    dato: '17.05.20',
    type: 'Admin',
  },
  {
    navn: 'Timmy Gresshoppe',
    dato: '21.06.19',
    type: 'Bruker',
  },
  {
    navn: 'Beyoncé',
    dato: '04.07.18',
    type: 'Admin',
  },
  {
    navn: 'Dovre Gubben Grå',
    dato: '25.12.24',
    type: 'Bruker',
  },
  {
    navn: 'Taylor Swift',
    dato: '13.08.23',
    type: 'Bruker',
  },
  {
    navn: 'Karius og Baktus',
    dato: '29.09.22',
    type: 'Bruker',
  },
  {
    navn: 'Ariana Grande',
    dato: '10.10.21',
    type: 'Admin',
  },
  {
    navn: 'Askeladden',
    dato: '11.11.20',
    type: 'Bruker',
  },
  {
    navn: 'Billie Eilish',
    dato: '12.12.19',
    type: 'Bruker',
  },
  {
    navn: 'Ole Brumm',
    dato: '01.01.24',
    type: 'Bruker',
  },
  {
    navn: 'Rihanna',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Pippi Langstrømpe',
    dato: '02.02.23',
    type: 'Bruker',
  },
  {
    navn: 'The Weeknd',
    dato: '03.03.22',
    type: 'Bruker',
  },
  {
    navn: 'Kardemomme by',
    dato: '04.04.21',
    type: 'Bruker',
  },
  {
    navn: 'Dua Lipa',
    dato: '05.05.20',
    type: 'Admin',
  },
  {
    navn: 'Bamse og Kylling',
    dato: '06.06.19',
    type: 'Bruker',
  },
  {
    navn: 'Coldplay',
    dato: '07.07.18',
    type: 'Bruker',
  },
  {
    navn: 'Morten Harket',
    dato: '08.08.23',
    type: 'Admin',
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin',
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
    type: 'Bruker',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
    type: 'Bruker',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
    type: 'Admin',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
    type: 'Bruker',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
    type: 'Bruker',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
    type: 'Admin',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
    type: 'Admin',
  },
  {
    navn: 'Kari Nordmann',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Ola Olsen',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Anne Persen',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Bjørn Hansen',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Lisa Karlsen',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Kari Nordmann',
    dato: '2024-02-07',
    type: 'Admin',
  },
  {
    navn: 'Ola Olsen',
    dato: '2024-01-30',
    type: 'Bruker',
  },
  {
    navn: 'Anne Hansen',
    dato: '2024-02-14',
    type: 'Moderator',
  },
  {
    navn: 'Per Pettersen',
    dato: '2024-02-01',
    type: 'Admin',
  },
  {
    navn: 'Lisa Lie',
    dato: '2024-02-19',
    type: 'Bruker',
  },
  {
    navn: 'Martin Martinsen',
    dato: '2024-02-05',
    type: 'Moderator',
  },
  {
    navn: 'Turid Thoresen',
    dato: '2024-02-12',
    type: 'Bruker',
  },
  {
    navn: 'Knut Knutsen',
    dato: '2024-02-08',
    type: 'Admin',
  },
  {
    navn: 'Helene Hansen',
    dato: '2024-02-16',
    type: 'Bruker',
  },
  {
    navn: 'Lars Larsen',
    dato: '2024-02-10',
    type: 'Moderator',
  },
];

type List = typeof data;

const meta = {
  component: Pagination,
  title: 'Komponenter/Pagination',
  argTypes: {
    // Props
    currentPage: {
      table: { category: category.props },
    },
    defaultCurrentPage: {
      table: { category: category.props },
    },
    sibling: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultSibling() },
      },
    },
    hidePrevNextButtonTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultHidePrevNextButtonTitle() },
      },
    },
    hidePageSummary: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultHidePageSummary() },
      },
    },
    listLength: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultListLength() },
      },
    },
    listTotalLength: {
      table: {
        category: category.props,
      },
    },
    ariaLabel: {
      table: {
        category: category.aria,
      },
    },
    // Event
    onChange: { table: { category: category.event } },
  },
  args: {
    listLength: getDefaultListLength(),
    listTotalLength: 70,
    sibling: getDefaultSibling(),
    defaultCurrentPage: 1,
  },
  parameters: {
    version: getVersion('ds-navigation'),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

// Hjelpefunksjon for å vise hvordan pagination påvirker liste utenfor komponent
const exampleListWithLimit = (
  data: List,
  start: number,
  listSize: number
): JSX.Element[] => {
  const itemStart = (start - 1) * listSize;
  return data
    .map((e, i) => {
      return (
        <List.Element key={`${e.navn}-${e.dato}`}>
          {i + 1} {e.navn}
        </List.Element>
      );
    })
    .slice(itemStart, itemStart + listSize);
};

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [page, setPage] = useState(1);
    const listLength = 5;
    const onChange = (page: number): void => {
      setPage(page);
    };
    return (
      <>
        <List hasSpacing>{exampleListWithLimit(data, page, listLength)}</List>
        <Pagination
          listLength={listLength}
          listTotalLength={data.length}
          defaultCurrentPage={1}
          onChange={onChange}
        />
      </>
    );
  },
} satisfies Story;

Examples.parameters = exampleParameters;
