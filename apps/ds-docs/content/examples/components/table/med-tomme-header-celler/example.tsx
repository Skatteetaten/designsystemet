import { type ReactElement, useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import {
  EditSVGpath,
  CopySVGpath,
  DeleteSVGpath,
} from '@skatteetaten/ds-icons';
import { SortState, Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './table.module.scss';

export default function TableWithEmptyHeaderCellsExample(): ReactElement {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      deadline: '10.04.2023',
      task: 'Mottatt tilbakemelding',
      name: 'BARMEN OG BORGHEIM',
      status: 'Tilgjengelig',
      id: '9f78',
    },
    {
      deadline: '12.04.2023',
      task: 'Klage på vedtak',
      name: 'LIMERICKS PARTNER ASA',
      status: 'Ny',
      id: '4b90',
    },
    {
      deadline: '13.04.2023',
      task: 'Mottatt tilbakemelding',
      name: 'ENCKEL OG WIRCKE LØSNINGER',
      status: 'Ny',
      id: '8c6f',
    },
    {
      deadline: '15.04.2023',
      task: 'Klage på vedtak',
      name: 'CORWOOD INDUSTRIES NORGE',
      status: 'Tilgjengelig',
      id: '8182',
    },
    {
      deadline: '22.04.2023',
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
          'Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør '
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
              <span className={styles.srOnly}>{'Rediger-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={styles.srOnly}>{'Kopier-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={styles.srOnly}>{'Slett-funksjon'}</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.DataCell id={row.id}>{row.deadline}</Table.DataCell>
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
}
