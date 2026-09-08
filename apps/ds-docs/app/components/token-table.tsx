import { JSX } from 'react';

import { Table } from '@skatteetaten/ds-table';

import { CopyButton } from './copy-button';

import styles from './token-table.module.scss';

interface TokenTableProps {
  caption: string;
  tokens: Record<string, string>;
}

export const TokenTable = ({
  caption,
  tokens,
}: TokenTableProps): JSX.Element => (
  <Table caption={caption} size={'medium'}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'} alignment={'right'}>
          {'Verdi'}
        </Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{''}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.entries(tokens).map(([name, value]) => (
        <Table.Row key={name}>
          <Table.DataCell>{name}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{value}</Table.DataCell>
          <Table.DataCell className={styles.copyButtonCell}>
            <CopyButton
              copyText={name}
              title={`Kopier ${name}`}
              copiedTitle={`${name} er kopiert`}
              errorTitle={`Kunne ikke kopiere ${name}`}
            />
          </Table.DataCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
