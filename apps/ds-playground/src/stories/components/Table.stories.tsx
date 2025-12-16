import { ReactNode, useState, JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TableRowProps } from 'libs/ds-table/src/TableRow/TableRow.types';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { Checkbox, TextField } from '@skatteetaten/ds-forms';
import {
  CopySVGpath,
  DeleteSVGpath,
  EditSVGpath,
  SaveSVGpath,
} from '@skatteetaten/ds-icons';
import { Alert } from '@skatteetaten/ds-status';
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
  title: 'Komponenter/Table',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: false, table: { category: category.props } },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getTableVariantDefault() },
      },
    },
    size: {
      table: {
        category: category.props,
        defaultValue: { summary: 'undefined' },
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
    size: 'large',
    caption: 'Dette er en tabell.',
    children: [
      <Table.Header key={'header'}>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Category'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Items'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'} alignment={'left'}>
            {'Expenditure'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>,
      <Table.Body key={'body'}>
        <Table.Row>
          <Table.DataCell className={'rowSpanRight'} rowSpan={2}>
            {'Edible'}
          </Table.DataCell>
          <Table.DataCell>{'Donuts'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Cake'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell rowSpan={2} className={'rowSpanRight'}>
            {'Non-Edible'}
          </Table.DataCell>
          <Table.DataCell>{'Stationery'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'18,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Batteries'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'9,000'}</Table.DataCell>
        </Table.Row>
      </Table.Body>,
      <Table.Sum key={'sum'} valueAlignment={'right'} colSpan={2}>
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
        <Alert variant={'info'} className={'bottomSpacingXL'} showAlert>
          {
            '"variant" er deprecated og vil bli erstattet av "size" i neste major release. Bruk size="large" for standard tabell og size="extraSmall" for kompakt tabell.'
          }
        </Alert>
        <div>
          {'Standard table'}
          <Table caption={'Dette er en standard tabell'} size={'large'}>
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
          <Table caption={'Dette er en kompakt tabell.'} size={'extraSmall'}>
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

export const Sizes: Story = {
  render: (_args): JSX.Element => {
    const klage = 'Klage på vedtak';
    return (
      <>
        <div>
          {'Extra small'}
          <Table
            caption={'Dette er en ekstra liten tabell'}
            size={'extraSmall'}
          >
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
          {'Small'}
          <Table caption={'Dette er en liten tabell.'} size={'small'}>
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

        <div>
          {'Medium'}
          <Table caption={'Dette er en medium tabell.'} size={'medium'}>
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

        <div>
          {'Large'}
          <Table caption={'Dette er en stor tabell.'} size={'large'}>
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
        size={'large'}
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
        size={'large'}
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

const CustomExpandableRow = (props: TableRowProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (): Promise<void> => {
    setIsSaving(true);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsSaving(false);
        setIsExpanded(false);
        resolve();
      }, 2000);
    });
  };

  return (
    <Table.Row
      expandButtonPosition={'right'}
      expandableContent={<div className={'emptyExpandedTableRow'}></div>}
      expandButtonAriaDescribedby={props.expandButtonAriaDescribedby}
      expandButtonTitle={isExpanded ? 'Lagre og lukk' : 'Åpne oppgave'}
      expandButtonProps={{
        svgPath: isExpanded ? SaveSVGpath : EditSVGpath,
        hasSpinner: isSaving,
        disabled: isSaving,
      }}
      isExpanded={isExpanded}
      isExpandable
      onExpand={() => setIsExpanded(true)}
      onClose={handleSave}
    >
      {props.children}
    </Table.Row>
  );
};

export const ExpandableWithCustomExpandButtonProps: Story = {
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
      <Table caption={'Oppgaver'} size={'large'}>
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
          {data.map((row) => {
            return (
              <CustomExpandableRow
                key={row.id}
                expandButtonAriaDescribedby={row.id}
              >
                <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
                <Table.DataCell>{row.timestamp}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>{row.eta}</Table.DataCell>
              </CustomExpandableRow>
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
        size={'large'}
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
          size={'large'}
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
      <Table caption={'avgiftsstatus'} size={'large'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell as={'td'}>
              <Checkbox
                classNames={{ label: 'checkboxInTable' }}
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
            <Table.HeaderCell alignment={'right'}>
              {'avgiftsgruppe'}
            </Table.HeaderCell>
            <Table.HeaderCell alignment={'right'}>{'Beløp'}</Table.HeaderCell>
            <Table.HeaderCell>{'Status'}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.DataCell>
                <Checkbox
                  classNames={{ label: 'checkboxInTable' }}
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
              <Table.DataCell alignment={'right'}>
                {item.avgiftsgruppe}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>{item.beloep}</Table.DataCell>
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
        <Table caption={'Firmaoversikt'} size={'large'}>
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
        <Table caption={'Firmaoversikt'} size={'large'}>
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

export const AddRow: Story = {
  render: (_args): JSX.Element => {
    const [data, setData] = useState([
      {
        id: 'abc',
        dato: '23.7.2025',
        personNumber: '14487219408',
        firstName: 'Treliters',
        lastName: 'Geir',
        amount: '641693',
      },
      {
        id: 'def',
        dato: '23.8.2025',
        personNumber: '70070903485',
        firstName: 'Ringlete',
        lastName: 'Under',
        amount: '139914',
      },
      {
        id: 'ghi',
        dato: '23.9.2025',
        personNumber: '70168226499',
        firstName: 'Uskikka',
        lastName: 'Resistens',
        amount: '667946',
      },
    ]);

    const [sortState, setSortState] = useState<SortState>({
      direction: 'none',
    });

    const [nextId, setNextId] = useState(4);
    const [addRow, setAddRow] = useState<boolean>(false);
    const [highlightedRowId, setHighlightedRowId] = useState<string | null>(
      null
    );
    const addPersonButtonRef = useRef<HTMLButtonElement>(null);
    const addPersonRef = useRef<HTMLDivElement>(null);

    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) return 0;
      if (a[sortKey] === b[sortKey]) return 0;
      if (sortState.direction === 'ascending')
        return a[sortKey] > b[sortKey] ? 1 : -1;
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });

    const handleSaveRow = (
      id: string,
      updated: Partial<(typeof data)[0]>
    ): void => {
      setData((prev) =>
        prev.map((row) => (row.id === id ? { ...row, ...updated } : row))
      );
    };

    const validateField = (field: string, value: string): string => {
      if (field === 'personNumber') {
        if (value.trim() === '') return 'Fødselsnummer må fylles ut';
        if (value.length !== 11) return 'Fødselsnummer må være 11 siffer';
      }
      if (field === 'lastName') {
        if (value.trim() === '') return 'Etternavn må fylles ut';
      }
      if (field === 'amount') {
        if (value.trim() === '') return 'Beløp må fylles ut';
        if (value !== '' && Number.isNaN(Number(value)))
          return 'Beløp må være et tall';
      }
      return '';
    };

    const createFormComponent = (
      initialData: { personNumber: string; lastName: string; amount: string },
      onSave: (data: {
        personNumber: string;
        lastName: string;
        amount: string;
      }) => void,
      onCancel: () => void,
      isAdd?: boolean
    ): JSX.Element => {
      const [personNumber, setPersonNumber] = useState(
        initialData.personNumber
      );
      const [lastName, setLastName] = useState(initialData.lastName);
      const [amount, setAmount] = useState(initialData.amount);
      const [personNumberError, setPersonNumberError] = useState('');
      const [lastNameError, setLastNameError] = useState('');
      const [amountError, setAmountError] = useState('');

      const handleBlur = (
        field: string,
        value: string,
        setError: (msg: string) => void
      ): void => {
        const error = validateField(field, value);
        setError(error);
      };

      const handleSave = (): void => {
        const personNumberErr = validateField('personNumber', personNumber);
        const lastNameErr = validateField('lastName', lastName);
        const amountErr = validateField('amount', amount);

        setPersonNumberError(personNumberErr);
        setLastNameError(lastNameErr);
        setAmountError(amountErr);

        if (!personNumberErr && !lastNameErr && !amountErr) {
          onSave({ personNumber, lastName, amount });
        }
      };

      return (
        <div className={'editableContent'}>
          <div className={'flex gapM bottomSpacingXL'}>
            <TextField
              label={'Fødselsnummer (11 siffer)'}
              value={personNumber}
              errorMessage={personNumberError}
              onChange={(e) => {
                setPersonNumber(e.target.value);
                setPersonNumberError('');
              }}
              onBlur={() =>
                handleBlur('personNumber', personNumber, setPersonNumberError)
              }
            />
            <TextField
              label={'Etternavn'}
              value={lastName}
              errorMessage={lastNameError}
              onChange={(e) => {
                setLastName(e.target.value);
                setLastNameError('');
              }}
              onBlur={() => handleBlur('lastName', lastName, setLastNameError)}
            />
          </div>
          <TextField
            label={'Beløp i kroner'}
            className={'textField150 bottomSpacingXL'}
            value={amount}
            errorMessage={amountError}
            onChange={(e) => {
              setAmount(e.target.value);
              setAmountError('');
            }}
            onBlur={() => handleBlur('amount', amount, setAmountError)}
          />
          <div className={'flex gapS'}>
            <Button onClick={handleSave}>{'Lagre'}</Button>
            <Button variant={'secondary'} onClick={onCancel}>
              {'Avbryt'}
            </Button>
          </div>
        </div>
      );
    };

    return (
      <>
        <Button
          ref={addPersonButtonRef}
          className={'bottomSpacingL'}
          onClick={(): void => {
            setAddRow(true);
            setTimeout(() => addPersonRef.current?.focus(), 1000);
          }}
        >
          {'Legg til person'}
        </Button>
        <Table
          caption={'Personoversikt'}
          rowInEditModeId={addRow ? 'addPerson' : undefined}
          sortState={sortState}
          setSortState={setSortState}
          size={'extraSmall'}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'} sortKey={'dato'} isSortable>
                {'Sist endret'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Fødselsnummer'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'} alignment={'right'}>
                {'Beløp'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {addRow && (
              <Table.EditableRow
                id={'addPerson'}
                editButtonPosition={'right'}
                editableContent={(closeEditing: () => void): ReactNode => {
                  return createFormComponent(
                    { personNumber: '', lastName: '', amount: '' },
                    (data) => {
                      const newRow = {
                        id: nextId.toString(),
                        dato: new Date().toLocaleDateString('no-NO'),
                        personNumber: data.personNumber,
                        firstName: '',
                        lastName: data.lastName,
                        amount: data.amount,
                      };
                      setData((prev) => [newRow, ...prev]);
                      setHighlightedRowId(newRow.id);
                      setNextId((prev) => prev + 1);
                      setAddRow(false);
                      closeEditing();
                      setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                      setTimeout(() => setHighlightedRowId(null), 3000);
                    },
                    () => {
                      setAddRow(false);
                      closeEditing();
                      setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                    },
                    true
                  );
                }}
                isNew
              >
                <Table.DataCell colSpan={4}>
                  <div
                    ref={addPersonRef}
                    tabIndex={-1}
                    className={'tabIndexNoOutline'}
                  >
                    {'Legg til person'}
                  </div>
                </Table.DataCell>
              </Table.EditableRow>
            )}
            {sortedData.map((person) => (
              <Table.EditableRow
                key={person.id}
                // .highlightRow {
                //   animation-name: highlightRow;
                //   animation-duration: 3s;
                //   animation-iteration-count: 1;
                // }
                // @keyframes highlightRow {
                //   0%,
                //   99% {
                //     background-color: var(--palette-forest-10);
                //   }
                //   100% {
                //     background-color: unset;
                //   }
                // }
                className={person.id === highlightedRowId ? 'highlightRow' : ''}
                editButtonPosition={'right'}
                editableContent={(closeEditing: () => void): ReactNode => {
                  return createFormComponent(
                    {
                      personNumber: person.personNumber,
                      lastName: person.lastName,
                      amount: person.amount,
                    },
                    (data) => {
                      handleSaveRow(person.id, {
                        dato: new Date().toLocaleDateString('no-NO'),
                        personNumber: data.personNumber,
                        lastName: data.lastName,
                        amount: data.amount,
                      });
                      closeEditing();
                    },
                    () => {
                      closeEditing();
                    }
                  );
                }}
              >
                <Table.DataCell>{person.dato}</Table.DataCell>
                <Table.DataCell>
                  {formatNationalIdentityNumber(person.personNumber)}
                </Table.DataCell>
                <Table.DataCell>{`${person.firstName} ${person.lastName}`}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {`${person.amount} kr`}
                </Table.DataCell>
              </Table.EditableRow>
            ))}
          </Table.Body>
        </Table>
      </>
    );
  },
} satisfies Story;
AddRow.parameters = exampleParameters;
