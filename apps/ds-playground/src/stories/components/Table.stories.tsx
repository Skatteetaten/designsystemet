/* eslint-disable sonarjs/no-duplicate-string */
//TODO rydd i dette
import { ReactNode, useRef, useState } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';
import {
  Table,
  TableProps,
  getTableVariantDefault,
  tableVariantArr,
  SortState,
} from '@skatteetaten/ds-table';
import { Heading } from '@skatteetaten/ds-typography';
import { Story, ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table,
  title: 'komponenter/Table/Table',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    variant: {
      options: [...tableVariantArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTableVariantDefault() },
      },
    },
    showCaption: {
      control: 'boolean',
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
} as ComponentMeta<typeof Table>;

const TemplateDefault: ComponentStory<typeof Table> = (args) => (
  <Table {...args} variant={args.variant}>
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
  </Table>
);

const TemplateVariant: ComponentStory<typeof Table> = (args) => (
  <>
    <div>
      {'Standard table'}
      <Table {...args} variant={'standard'}>
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
            <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
            <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
            <Table.DataCell>{'NY'}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>{'10.04.2023'}</Table.DataCell>
            <Table.DataCell>{'Kategori 1'}</Table.DataCell>
            <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
            <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
            <Table.DataCell>{'NY'}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    <div>
      {'Compact table'}
      <Table {...args} variant={'compact'}>
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
            <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
            <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
            <Table.DataCell>{'NY'}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>{'10.04.2023'}</Table.DataCell>
            <Table.DataCell>{'Kategori 1'}</Table.DataCell>
            <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
            <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
            <Table.DataCell>{'NY'}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </>
);

const tableDefaultParameters = {
  version: getVersion('ds-table'),
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const TableDefault: Story<TableProps> = TemplateDefault.bind({});
TableDefault.storyName = 'Default';
const baseArgs = {
  caption: 'Jeg er en tabell.',
  children: 'Klikk',
};

TableDefault.args = {
  ...baseArgs,
  variant: 'standard',
};
TableDefault.parameters = tableDefaultParameters;

export const Variants: Story<TableProps> = TemplateVariant.bind({});
Variants.args = {
  ...baseArgs,
  variant: 'compact',
};
Variants.parameters = tableDefaultParameters;

const TemplateSort: Story<TableProps> = (args) => {
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
    //TODO gjøre sortkey generic i context? unngå typecast?
    const sortKey = sortState.sortKey as keyof typeof data[0];
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
      {...args}
      sortState={sortState}
      setSortState={setSortState}
      variant={args.variant}
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
};

export const TableSort: Story<TableProps> = TemplateSort.bind({});
TableSort.storyName = 'Sortable';

TableSort.args = {
  ...baseArgs,
  variant: 'standard',
};
TableSort.parameters = tableDefaultParameters;

const TemplateExampleExpandable: Story<TableProps> = (args) => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      firma: 'Bluth Company',
      timestamp: '08.04.2020 11:31:57',
      status: 'Under behandling',
      eta: 'Mer enn 1 dag',
      ansatte: [
        {
          navn: 'Per Olsen',
          fnr: '01012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
      ],
    },
    {
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
      ansatte: [
        {
          navn: 'Bryce Navnesen',
          fnr: '02012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
        {
          navn: 'Alice Middleman',
          fnr: '03012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
      ],
    },
    {
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '–',
      ansatte: [
        {
          navn: 'Kai Mossige',
          fnr: '01012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
      ],
    },
    {
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '–',
      ansatte: [
        {
          navn: 'Kari Saksbehandler',
          fnr: '01012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
        {
          navn: 'Bob Egil Hansen',
          fnr: '04012020 99999',
          beskrivelse: 'Ingen flere opplysninger',
        },
      ],
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    //TODO gjøre sortkey generic i context? unngå typecast?
    const sortKey = sortState.sortKey as keyof typeof data[0];

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
    <div>
      <Table
        {...args}
        caption={'Firmaoversikt'}
        sortState={sortState}
        setSortState={setSortState}
        variant={args.variant}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} />
            <Table.HeaderCell sortKey={'firma'} scope={'col'} isSortable>
              {'Firma'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>
              {'Forventet behandlet'}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, idx) => {
            return (
              <Table.Row
                key={idx}
                expandedContent={
                  <div className={'emptyExpandedTableRow'}></div>
                }
                isExpandable
              >
                <Table.DataCell>{row.firma}</Table.DataCell>
                <Table.DataCell>{row.timestamp}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>{row.eta}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export const TableExampleExpandable = TemplateExampleExpandable.bind({});
TableExampleExpandable.storyName = 'Example Expandable';

TableExampleExpandable.args = {
  ...baseArgs,
  variant: 'standard',
};
TableExampleExpandable.parameters = tableDefaultParameters;

const TemplateExampleEditable: ComponentStory<typeof Table> = (args) => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });
  const redigerDataRef = useRef<HTMLHeadingElement>(null);

  const data = [
    {
      month: 'Januar',
      amount: 5426,
      coverage: '100 %',
      revenue: '1000',
    },
    {
      month: 'Februar',
      amount: 5432,
      coverage: '50 %',
      revenue: '500',
    },
    {
      month: 'Mars',
      amount: 4899,
      coverage: '20 %',
      revenue: '2000',
    },
    {
      month: 'April',
      amount: 2344,
      coverage: '30 %',
      revenue: '1055',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    //TODO gjøre sortkey generic i context? unngå typecast?
    const sortKey = sortState.sortKey as keyof typeof data[0];

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
    <div>
      <Table
        {...args}
        sortState={sortState}
        setSortState={setSortState}
        variant={args.variant}
        caption={'Månedoversikt'}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'}>{'Dekningsgrad'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'} sortKey={'amount'} isSortable>
              {'Beløp'}
            </Table.HeaderCell>
            <Table.HeaderCell alignment={'right'} scope={'col'}>
              {'Måned'}
            </Table.HeaderCell>
            <Table.HeaderCell alignment={'right'} scope={'col'}>
              {'Avkastning'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, idx) => {
            return (
              <Table.EditableRow
                key={idx}
                editableContent={(closeEditing: () => void): ReactNode => (
                  <div className={'emptyExpandedTableRow'}>
                    <Heading
                      ref={redigerDataRef}
                      className={'scrollToTopContainer'}
                      as={'h2'}
                      level={2}
                    >
                      {'rediger data'}
                    </Heading>
                    <MegaButton onClick={closeEditing}>{'Lukk2'}</MegaButton>
                  </div>
                )}
                onEdit={(): void => {
                  setTimeout(() => {
                    if (redigerDataRef?.current) {
                      redigerDataRef.current.tabIndex = 0; //TODO bør ikke være nødvendig å sette tabindex på denne måten
                    }
                    redigerDataRef?.current?.focus();
                  }, 0);
                }}
              >
                <Table.DataCell>{row.coverage}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {row.amount}
                </Table.DataCell>
                <Table.DataCell alignment={'right'}>{row.month}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {row.revenue}
                </Table.DataCell>
              </Table.EditableRow>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export const TableExampleEditable = TemplateExampleEditable.bind({});
TableExampleEditable.storyName = 'Example Editable';

TableExampleEditable.args = {
  ...baseArgs,
  variant: 'standard',
};
TableExampleEditable.parameters = tableDefaultParameters;
