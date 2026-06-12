import { type ReactElement } from 'react';

import { Table } from '@skatteetaten/ds-table';

export default function TableSizesExample(): ReactElement {
  const klage = 'Klage pa vedtak';

  return (
    <>
      <div>
        {'Small'}
        <Table caption={'Dette er en liten tabell.'} size={'small'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
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
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
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
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
