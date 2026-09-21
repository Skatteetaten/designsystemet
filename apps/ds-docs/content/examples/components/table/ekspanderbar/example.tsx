import { type ReactElement, useState } from 'react';

import { SortState, Table } from '@skatteetaten/ds-table';

import styles from './ekspanderbar.module.scss';

export default function TableExpandableExample(): ReactElement {
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
    },
    {
      id: 'ijkl',
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
    },
    {
      id: 'uvwx',
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '-',
    },
    {
      id: 'cdef',
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '-',
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
              expandableContent={<div className={styles.emptyContent}></div>}
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
}
