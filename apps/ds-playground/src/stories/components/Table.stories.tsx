import { ReactNode, useState } from 'react';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { densityArr } from '@skatteetaten/ds-core-utils';
import {
  CopySVGpath,
  DeleteSVGpath,
  EditSVGpath,
} from '@skatteetaten/ds-icons';
import {
  Table,
  getTableVariantDefault,
  SortState,
} from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table,
  title: 'Komponenter/Table/Table',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    variant: {
      options: [...densityArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTableVariantDefault() },
        type: { summary: densityArr },
      },
    },
    showCaption: {
      table: {
        category: category.props,
      },
    },
    sortState: {
      control: false,
      table: {
        category: category.props,
      },
    },
    setSortState: {
      control: false,
      table: {
        category: category.props,
      },
    },

    caption: {
      table: {
        category: category.props,
      },
    },
    hasFullWidth: {
      table: {
        category: category.props,
      },
    },
  },
  parameters: {
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table>;

/* eslint-disable sonarjs/no-duplicate-string */
export const Preview: StoryObj<typeof Table> = {
  args: {
    caption: 'Dette er en tabell.',
    children: (
      <>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'}>{'Category'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Items'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Expenditure'}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell className={'rowSpanRight'} rowSpan={2}>
              {'Edible'}
            </Table.DataCell>
            <Table.DataCell>{'Donuts'}</Table.DataCell>
            <Table.DataCell>{'3,000'}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>{'Cake'}</Table.DataCell>
            <Table.DataCell>{'3,000'}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell rowSpan={2} className={'rowSpanRight'}>
              {'Non-Edible'}
            </Table.DataCell>
            <Table.DataCell>{'Stationery'}</Table.DataCell>
            <Table.DataCell>{'18,000'}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>{'Batteries'}</Table.DataCell>
            <Table.DataCell>{'9,000'}</Table.DataCell>
          </Table.Row>
        </Table.Body>
        <Table.Sum colSpan={2}>{'32,000'}</Table.Sum>
      </>
    ),
  },
};

export const Variants: StoryFn<typeof Table> = () => {
  const klage = 'Klage på vedtak';
  return (
    <>
      <div>
        {'Standard table'}
        <Table caption={'Dette er en standard tabell'} variant={'standard'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Kategori'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.03.2023'}</Table.DataCell>
              <Table.DataCell>{'Kategori 2'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'HAIKU HEDGE ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'11.04.2023'}</Table.DataCell>
              <Table.DataCell>{'Kategori 4'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'ATMOSPHERIC EXPLORER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div>
        {'Compact table'}
        <Table caption={'Dette er en kompakt tabell.'} variant={'compact'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Kategori'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{'Kategori 1'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{'Kategori 1'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export const Sortable: StoryFn<typeof Table> = () => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      player: 'Ole',
      score: 100,
    },
    {
      player: 'Dole',
      score: 20,
    },
    {
      player: 'Doffen',
      score: 30,
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];
    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      sortState={sortState}
      setSortState={setSortState}
      caption={'High scores'}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'} sortKey={'player'} isSortable>
            {'Player'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'} sortKey={'score'} isSortable>
            {'High Score'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row, index) => (
          /* hvis ikke index tas med i key slik at de blir unike når tabellen sorteres
          så blir voiceover i Safari forvirret og hopper over rader */
          <Table.Row key={`${row.player}-${index}`}>
            <Table.DataCell alignment={'center'}>{row.player}</Table.DataCell>
            <Table.DataCell alignment={'right'}>{row.score}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const Expandable: StoryFn<typeof Table> = () => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      id: 'abcd',
      firma: 'Bluth Company',
      timestamp: '08.04.2020 11:31:57',
      status: 'Under behandling',
      eta: 'Mer enn 1 dag',
      ansatte: [
        {
          id: 'efgh',
          navn: 'Per Olsen',
          fnr: '11012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
      ],
    },
    {
      id: 'ijkl',
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
      ansatte: [
        {
          id: 'mnop',
          navn: 'Bryce Navnesen',
          fnr: '02012020 99999',
          beskrivelse: 'noen flere opplysninger',
        },
        {
          id: 'qrst',
          navn: 'Alice Middleman',
          fnr: '03012020 99999',
          beskrivelse: 'mange flere opplysninger',
        },
      ],
    },
    {
      id: 'uvwx',
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '–',
      ansatte: [
        {
          id: 'yzab',
          navn: 'Kai Mossige',
          fnr: '01012020 99999',
          beskrivelse: 'finnes flere opplysninger?',
        },
      ],
    },
    {
      id: 'cdef',
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '–',
      ansatte: [
        {
          id: 'ghij',
          navn: 'Kari Saksbehandler',
          fnr: '01012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
        {
          id: 'klmn',
          navn: 'Bob Egil Hansen',
          fnr: '04012020 99999',
          beskrivelse: 'Ingen andre opplysninger',
        },
      ],
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      caption={'Firmaoversikt'}
      sortState={sortState}
      setSortState={setSortState}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sortKey={'firma'} scope={'col'} isSortable>
            {'Firma'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>
            {'Forventet behandlet'}
          </Table.HeaderCell>
          <Table.HeaderCell as={'td'} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row, index) => {
          return (
            <Table.Row
              key={`${row.id}-${index}`}
              expandButtonPosition={'right'}
              expandableContent={
                <div className={'emptyExpandedTableRow'}></div>
              }
              expandButtonAriaDescribedby={row.id}
              isExpandable
            >
              <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
              <Table.DataCell>{row.timestamp}</Table.DataCell>
              <Table.DataCell>{row.status}</Table.DataCell>
              <Table.DataCell>{row.eta}</Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export const Editable: StoryFn<typeof Table> = () => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      month: 'Januar',
      amount: 5426,
      coverage: '100 %',
      revenue: '1000',
      id: '9f78',
    },
    {
      month: 'Februar',
      amount: 5432,
      coverage: '50 %',
      revenue: '500',
      id: '6925',
    },
    {
      month: 'Mars',
      amount: 4899,
      coverage: '20 %',
      revenue: '2000',
      id: 'fc9d',
    },
    {
      month: 'April',
      amount: 2344,
      coverage: '30 %',
      revenue: '1055',
      id: '1d15',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      sortState={sortState}
      setSortState={setSortState}
      caption={'Månedoversikt'}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell as={'td'} />
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'Måned'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'} sortKey={'amount'} isSortable>
            {'Beløp'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Dekningsgrad'}</Table.HeaderCell>
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'Avkastning'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row, index) => {
          return (
            <Table.EditableRow
              key={`${row.id}-${index}`}
              editableContent={(closeEditing: () => void): ReactNode => (
                <div className={'emptyExpandedTableRow'}>
                  <Button
                    onClick={(): void => {
                      closeEditing();
                    }}
                  >
                    {'Lukk'}
                  </Button>
                </div>
              )}
              editButtonAriaDescribedby={row.id}
              onEdit={(): void => {
                console.log('redigerrer rad');
              }}
            >
              <Table.DataCell id={row.id} alignment={'right'}>
                {row.month}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.amount}</Table.DataCell>
              <Table.DataCell>{row.coverage}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.revenue}</Table.DataCell>
            </Table.EditableRow>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export const WithEmptyHeaders: StoryFn<typeof Table> = () => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      deadline: '10.04.2023',
      category: 'Kategori 1',
      task: 'Mottatt tilbakemelding',
      name: 'BARMEN OG BORGHEIM',
      status: 'Tilgjengelig',
      id: '9f78',
    },
    {
      deadline: '12.04.2023',
      category: 'Kategori 2',
      task: 'Klage på vedtak',
      name: 'LIMERICKS PARTNER ASA',
      status: 'Ny',
      id: '4b90',
    },
    {
      deadline: '13.04.2023',
      category: 'Kategori 3',
      task: 'Mottatt tilbakemelding',
      name: 'ENCKEL OG WIRCKE LØSNINGER',
      status: 'Ny',
      id: '8c6f',
    },
    {
      deadline: '15.04.2023',
      category: 'Kategori 1',
      task: 'Klage på vedtak',
      name: 'CORWOOD INDUSTRIES NORGE',
      status: 'Tilgjengelig',
      id: '8182',
    },
    {
      deadline: '22.04.2023',
      category: 'Kategori 3',
      task: 'Medhold klage',
      name: 'SLANTED N CHANTED',
      status: 'Under arbeid',
      id: '85cd',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <>
      <Paragraph>
        {
          'Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør'
        }
        {'vi legge på sr-only tekster som th for at det skulle bli lettere for'}
        {'skjermleserbrukere å forstå tabellen.'}
      </Paragraph>
      <Table
        caption={'Arbeidsoppgaver'}
        sortState={sortState}
        setSortState={setSortState}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} sortKey={'deadline'} isSortable>
              {'Frist'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'} sortKey={'category'} isSortable>
              {'Kategori'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>
              {'Arbeidsoppgave'}
            </Table.HeaderCell>
            <Table.HeaderCell
              alignment={'right'}
              scope={'col'}
              sortKey={'name'}
              isSortable
            >
              {'navn'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
            <Table.HeaderCell>
              <span className={'srOnly'}>{'Rediger-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={'srOnly'}>{'Kopier-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={'srOnly'}>{'Slett-funksjon'}</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, index) => {
            return (
              <Table.Row key={`${row.id}-${index}`}>
                <Table.DataCell id={row.id}>{row.deadline}</Table.DataCell>
                <Table.DataCell>{row.category}</Table.DataCell>
                <Table.DataCell>{row.task}</Table.DataCell>
                <Table.DataCell>{row.name}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={EditSVGpath}>{'Rediger'}</InlineButton>
                </Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={CopySVGpath}>{'Kopier'}</InlineButton>
                </Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={DeleteSVGpath}>{'Slett'}</InlineButton>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
