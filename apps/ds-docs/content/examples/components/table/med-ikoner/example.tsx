import { type ReactElement } from 'react';

import {
  CompletedSVGpath,
  TimelapseSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Table } from '@skatteetaten/ds-table';

export default function TableWithIconsExample(): ReactElement {
  return (
    <Table caption={'Dette er en ekstra liten tabell'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Arbeidsoppgave'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'10.03.2023'}</Table.DataCell>
          <Table.DataCell>{'Klage pa vedtak'}</Table.DataCell>
          <Table.DataCell>
            <Icon svgPath={CompletedSVGpath} /> {'Fullfort'}
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'11.04.2023'}</Table.DataCell>
          <Table.DataCell>{'Klage pa vedtak'}</Table.DataCell>
          <Table.DataCell>
            <Icon svgPath={TimelapseSVGpath} /> {'Under arbeid'}
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
