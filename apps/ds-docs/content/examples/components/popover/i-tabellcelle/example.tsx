import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Table } from '@skatteetaten/ds-table';

import styles from './popover.module.scss';

export default function PopoverInTableCellExample(): ReactElement {
  const filesId = 'popover-files-cell';

  return (
    <Table caption={'Oppgaver'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{'Referansenummer'}</Table.HeaderCell>
          <Table.HeaderCell>{'Dato'}</Table.HeaderCell>
          <Table.HeaderCell>{'Filer'}</Table.HeaderCell>
          <Table.HeaderCell>{'Brev'}</Table.HeaderCell>
          <Table.HeaderCell>{'Vedtak'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'Wake Up Call'}</Table.DataCell>
          <Table.DataCell>{'10.01.2024'}</Table.DataCell>
          <Table.DataCell>{'3 filer'}</Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'A Cat Nap'}</Table.DataCell>
          <Table.DataCell>{'09.01.2024'}</Table.DataCell>
          <Table.DataCell>
            <span id={filesId}>{'12 filer'}</span>
            <Popover position={'bottomStart'} color={'ochre'}>
              <Popover.Trigger
                ariaDescribedby={filesId}
                size={'extraSmall'}
                className={styles.triggerSpacing}
              />
              <Popover.Content>
                {
                  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret bestar av en bokstav etterfulgt av fire tall, f.eks. H0101.'
                }
              </Popover.Content>
            </Popover>
          </Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Down and Out'}</Table.DataCell>
          <Table.DataCell>{'08.01.2024'}</Table.DataCell>
          <Table.DataCell>{'3 filer'}</Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
