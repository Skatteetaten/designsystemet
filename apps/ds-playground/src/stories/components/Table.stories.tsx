import { ReactNode, useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { densityArr } from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
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

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Table,
  title: 'Komponenter/Table/Table',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: false, table: { category: category.props } },
    variant: {
      options: [...densityArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTableVariantDefault() },
      },
    },
    showCaption: { table: { category: category.props } },
    sortState: {
      control: false,
      table: { category: category.props },
    },
    setSortState: {
      control: false,
      table: { category: category.props },
    },
    caption: { table: { category: category.props } },
    hasFullWidth: { table: { category: category.props } },
    rowInEditModeId: { table: { category: category.props } },
  },
  args: {
    caption: 'Dette er en tabell.',
    children: [
      <Table.Header key={'header'}>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Category'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Items'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Expenditure'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key={'body'}>
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
      </Table.Body>,
      <Table.Sum key={'sum'} valueAlignment={'left'} colSpan={2}>
        {'32,000'}
      </Table.Sum>,
    ],
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Variants: Story = {
  render: (_args): JSX.Element => {
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
  },
} satisfies Story;
Variants.parameters = exampleParameters;

export const Sortable: Story = {
  render: (_args): JSX.Element => {
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
          {sortedData.map((row) => (
            <Table.Row key={row.player}>
              <Table.DataCell alignment={'center'}>{row.player}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.score}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
} satisfies Story;
Sortable.parameters = exampleParameters;

export const Expandable: Story = {
  render: (_args): JSX.Element => {
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
          {sortedData.map((row) => {
            return (
              <Table.Row
                key={row.id}
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
  },
} satisfies Story;
Expandable.parameters = exampleParameters;

export const Editable: Story = {
  render: (_args): JSX.Element => {
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
          {sortedData.map((row) => {
            return (
              <Table.EditableRow
                key={row.id}
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
                <Table.DataCell alignment={'right'}>
                  {row.amount}
                </Table.DataCell>
                <Table.DataCell>{row.coverage}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {row.revenue}
                </Table.DataCell>
              </Table.EditableRow>
            );
          })}
        </Table.Body>
      </Table>
    );
  },
} satisfies Story;
Editable.parameters = exampleParameters;

export const WithEmptyHeaders: Story = {
  render: (_args): JSX.Element => {
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
          {
            'vi legge på sr-only tekster som th for at det skulle bli lettere for'
          }
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
            {sortedData.map((row) => {
              return (
                <Table.Row key={row.id}>
                  <Table.DataCell id={row.id}>{row.deadline}</Table.DataCell>
                  <Table.DataCell>{row.category}</Table.DataCell>
                  <Table.DataCell>{row.task}</Table.DataCell>
                  <Table.DataCell>{row.name}</Table.DataCell>
                  <Table.DataCell>{row.status}</Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={EditSVGpath}>
                      {'Rediger'}
                    </InlineButton>
                  </Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={CopySVGpath}>
                      {'Kopier'}
                    </InlineButton>
                  </Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={DeleteSVGpath}>
                      {'Slett'}
                    </InlineButton>
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </>
    );
  },
} satisfies Story;
WithEmptyHeaders.parameters = exampleParameters;

export const Selectable: Story = {
  render: (_args): JSX.Element => {
    const items = [
      {
        fastsatt: '31.01.2018',
        avgiftstype: 'OR',
        avgiftsgruppe: '525',
        beloep: '6045',
        status: 'Iverksatt',
        id: '1',
      },
      {
        fastsatt: '31.05.2018',
        avgiftstype: 'BR',
        avgiftsgruppe: '525',
        beloep: '6033',
        status: 'Iverksatt',
        id: '2',
      },
      {
        fastsatt: '02.03.2018',
        avgiftstype: 'AR',
        avgiftsgruppe: '525',
        beloep: '6064',
        status: 'Under arbeid',
        id: '3',
      },
      {
        fastsatt: '03.03.2018',
        avgiftstype: 'DR',
        avgiftsgruppe: '525',
        beloep: '6064',
        status: 'Under arbeid',
        id: '4',
      },
      {
        fastsatt: '04.01.2018',
        avgiftstype: 'BR',
        avgiftsgruppe: '525',
        beloep: '6064',
        status: 'Under arbeid',
        id: '5',
      },
    ];
    const [checkedState, setCheckedState] = useState<Array<number>>([]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

    return (
      <Table caption={'avgiftsstatus'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox
                checked={isAllChecked}
                hideLabel
                onChange={() => {
                  if (isAllChecked) {
                    setCheckedState([]);
                  }

                  setIsAllChecked(!isAllChecked);
                }}
              >
                {'velg alle rader'}
              </Checkbox>
            </Table.HeaderCell>
            <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
            <Table.HeaderCell>{'avgiftstype'}</Table.HeaderCell>
            <Table.HeaderCell>{'avgiftsgruppe'}</Table.HeaderCell>
            <Table.HeaderCell>{'Beløp'}</Table.HeaderCell>
            <Table.HeaderCell>{'Status'}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.DataCell>
                <Checkbox
                  checked={
                    isAllChecked || checkedState.some((it) => it === index)
                  }
                  hideLabel
                  onChange={(event) => {
                    if (isAllChecked) {
                      setCheckedState(
                        Array.from(Array(items.length).keys()).filter(
                          (it) => it !== index
                        )
                      );
                      setIsAllChecked(false);
                    } else if (event.target.checked) {
                      setCheckedState([index, ...checkedState]);
                    } else {
                      setCheckedState(
                        checkedState.filter((it) => it !== index)
                      );
                    }
                  }}
                >{`Velg ${item.fastsatt}`}</Checkbox>
              </Table.DataCell>
              <Table.DataCell as={'th'} scope={'row'}>
                {item.fastsatt}
              </Table.DataCell>
              <Table.DataCell>{item.avgiftstype}</Table.DataCell>
              <Table.DataCell>{item.avgiftsgruppe}</Table.DataCell>
              <Table.DataCell>{item.beloep}</Table.DataCell>
              <Table.DataCell>{item.status}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
} satisfies Story;
Selectable.parameters = exampleParameters;

export const WithStripes: Story = {
  render: (_args): JSX.Element => {
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

    return (
      <>
        <Table caption={'Firmaoversikt'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Firma'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Forventet behandlet'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row) => {
              return (
                <Table.Row
                  key={row.id}
                  // .stripedTable:nth-of-type(even) { background-color: var(--palette-graphite-5);}
                  className={'stripedTable'}
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
        <Table caption={'Firmaoversikt'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Firma'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Forventet behandlet'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row, index) => {
              return (
                <Table.Row
                  key={row.id}
                  // .evenRow { background-color: var(--palette-graphite-5); }
                  // .oddRow { background-color: var(--palette-graphite-0); }
                  className={index % 2 === 0 ? 'oddRow' : 'evenRow'}
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
      </>
    );
  },
} satisfies Story;
WithStripes.parameters = exampleParameters;
