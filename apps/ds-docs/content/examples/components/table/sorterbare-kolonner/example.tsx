import { type ReactElement, useState } from 'react';

import { SortState, Table } from '@skatteetaten/ds-table';

export default function TableSortableColumnsExample(): ReactElement {
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
}
