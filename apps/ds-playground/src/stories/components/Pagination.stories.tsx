import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';

import {
  Pagination,
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from '@skatteetaten/ds-navigation';
import { List } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const data = [
  {
    navn: 'Donald Duck',
    dato: '25.03.20',
  },
  {
    navn: 'Robbie Wiliams',
    dato: '25.03.15',
  },
  {
    navn: 'Minnie Mouse',
    dato: '12.05.18',
  },
  {
    navn: 'Katy Perry',
    dato: '01.01.23',
  },
  {
    navn: 'Langbein',
    dato: '14.02.22',
  },
  {
    navn: 'Justin Bieber',
    dato: '08.03.19',
  },
  {
    navn: 'Daisy Duck',
    dato: '07.04.21',
  },
  {
    navn: 'Ed Sheeran',
    dato: '17.05.20',
  },
  {
    navn: 'Timmy Gresshoppe',
    dato: '21.06.19',
  },
  {
    navn: 'Beyoncé',
    dato: '04.07.18',
  },
  {
    navn: 'Dovre Gubben Grå',
    dato: '25.12.24',
  },
  {
    navn: 'Taylor Swift',
    dato: '13.08.23',
  },
  {
    navn: 'Karius og Baktus',
    dato: '29.09.22',
  },
  {
    navn: 'Ariana Grande',
    dato: '10.10.21',
  },
  {
    navn: 'Askeladden',
    dato: '11.11.20',
  },
  {
    navn: 'Billie Eilish',
    dato: '12.12.19',
  },
  {
    navn: 'Ole Brumm',
    dato: '01.01.24',
  },
  {
    navn: 'Rihanna',
    dato: '25.03.20',
  },
  {
    navn: 'Pippi Langstrømpe',
    dato: '02.02.23',
  },
  {
    navn: 'The Weeknd',
    dato: '03.03.22',
  },
  {
    navn: 'Kardemomme by',
    dato: '04.04.21',
  },
  {
    navn: 'Dua Lipa',
    dato: '05.05.20',
  },
  {
    navn: 'Bamse og Kylling',
    dato: '06.06.19',
  },
  {
    navn: 'Coldplay',
    dato: '07.07.18',
  },
  {
    navn: 'Morten Harket',
    dato: '08.08.23',
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
  },
  {
    navn: 'Kaisa Lundquist',
    dato: '23.05.16',
  },
  {
    navn: 'Reidar Olsen',
    dato: '15.11.16',
  },
  {
    navn: 'Bob Egil Hansen',
    dato: '15.11.16',
  },
  {
    navn: 'Leif Kåre Lund',
    dato: '23.10.17',
  },
  {
    navn: 'Kai Mossige',
    dato: '25.11.19',
  },
  {
    navn: 'Bob Testman',
    dato: '01.01.20',
  },
  {
    navn: 'Alice Middleman',
    dato: '25.03.20',
  },
  {
    navn: 'Kari Saksbehandler',
    dato: '25.03.20',
  },
  {
    navn: 'Frank Johansen',
    dato: '26.03.20',
  },
  {
    navn: 'Tallulah Willis',
    dato: '01.05.20',
  },
  {
    navn: 'Kari Nordmann',
    dato: '2024-02-07',
  },
  {
    navn: 'Ola Olsen',
    dato: '2024-02-07',
  },
  {
    navn: 'Anne Persen',
    dato: '2024-02-07',
  },
  {
    navn: 'Bjørn Hansen',
    dato: '2024-02-07',
  },
  {
    navn: 'Lisa Karlsen',
    dato: '2024-02-07',
  },
  {
    navn: 'Kari Nordmann',
    dato: '2024-02-07',
  },
  {
    navn: 'Ola Olsen',
    dato: '2024-01-30',
  },
  {
    navn: 'Anne Hansen',
    dato: '2024-02-14',
  },
  {
    navn: 'Per Pettersen',
    dato: '2024-02-01',
  },
  {
    navn: 'Lisa Lie',
    dato: '2024-02-19',
  },
  {
    navn: 'Martin Martinsen',
    dato: '2024-02-05',
  },
  {
    navn: 'Turid Thoresen',
    dato: '2024-02-12',
  },
  {
    navn: 'Knut Knutsen',
    dato: '2024-02-08',
  },
  {
    navn: 'Helene Hansen',
    dato: '2024-02-16',
  },
  {
    navn: 'Lars Larsen',
    dato: '2024-02-10',
  },
];

type DataList = typeof data;

const meta = {
  component: Pagination,
  title: 'Komponenter/Pagination',
  argTypes: {
    // Props
    currentPage: {
      table: { category: category.props },
    },
    defaultCurrent: {
      table: { category: category.props },
    },
    sibling: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultSibling().toString() },
      },
    },
    hidePrevNextButtonTitle: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getDefaultHidePrevNextButtonTitle().toString(),
        },
      },
    },
    hidePageSummary: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultHidePageSummary().toString() },
      },
    },
    pageSize: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultPageSize().toString() },
      },
    },
    totalItems: {
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
    pageSize: getDefaultPageSize(),
    totalItems: 70,
    sibling: getDefaultSibling(),
    defaultCurrent: 1,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

// Hjelpefunksjon for å vise hvordan pagination påvirker liste utenfor komponent
const exampleListWithLimit = (
  data: DataList,
  start: number,
  pageSize: number
): JSX.Element[] => {
  const itemStart = (start - 1) * pageSize;
  return data
    .map((e, i) => {
      return (
        <List.Element key={`${e.navn}-${e.dato}`}>
          {i + 1} {e.navn}
        </List.Element>
      );
    })
    .slice(itemStart, itemStart + pageSize);
};

export const Controlled: Story = {
  render: (_args): JSX.Element => {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const onChange = (page: number): void => {
      setPage(page);
    };
    // Antall elementer i data-arrayen bestemmer totalItems
    //   const data = [
    // {
    //   navn: 'Donald Duck',
    //   dato: '25.03.20'
    // },
    // ....]
    return (
      <>
        <List hasSpacing>{exampleListWithLimit(data, page, pageSize)}</List>
        <Pagination
          pageSize={pageSize}
          totalItems={data.length}
          currentPage={page}
          onChange={onChange}
        />
      </>
    );
  },
} satisfies Story;

export const Uncontrolled: Story = {
  render: (_args): JSX.Element => {
    return <Pagination pageSize={10} totalItems={40} defaultCurrent={3} />;
  },
} satisfies Story;

Uncontrolled.parameters = exampleParameters;
Controlled.parameters = exampleParameters;
