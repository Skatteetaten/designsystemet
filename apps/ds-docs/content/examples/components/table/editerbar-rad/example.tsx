import { type ReactElement, type ReactNode, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { SortState, Table } from '@skatteetaten/ds-table';

export default function TableEditableRowExample(): ReactElement {
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
      caption={'Månedsoversikt'}
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
              <Table.DataCell alignment={'right'}>{row.amount}</Table.DataCell>
              <Table.DataCell>{row.coverage}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.revenue}</Table.DataCell>
            </Table.EditableRow>
          );
        })}
      </Table.Body>
    </Table>
  );
}
