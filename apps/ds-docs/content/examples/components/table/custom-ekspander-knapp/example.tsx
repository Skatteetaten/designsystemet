import { type ReactElement, useState } from 'react';

import { SaveSVGpath, EditSVGpath } from '@skatteetaten/ds-icons';
import { Table } from '@skatteetaten/ds-table';

export default function TableExpandableWithCustomButtonExample(): ReactElement {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [savingRows, setSavingRows] = useState<Set<string>>(new Set());

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

  const handleExpand = (rowId: string): void => {
    setExpandedRows((prev) => new Set(prev).add(rowId));
  };

  const handleClose = async (rowId: string): Promise<void> => {
    setSavingRows((prev) => new Set(prev).add(rowId));

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    setSavingRows((prev) => {
      const next = new Set(prev);
      next.delete(rowId);
      return next;
    });

    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.delete(rowId);
      return next;
    });
  };

  return (
    <Table caption={'Oppgaver'}>
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
          const isExpanded = expandedRows.has(row.id);
          const isSaving = savingRows.has(row.id);

          return (
            <Table.Row
              key={row.id}
              expandButtonPosition={'right'}
              expandableContent={
                <div className={'emptyExpandedTableRow'}></div>
              }
              expandButtonAriaDescribedby={row.id}
              expandButtonTitle={isExpanded ? 'Lagre og lukk' : 'Apne oppgave'}
              expandButtonProps={{
                svgPath: isExpanded ? SaveSVGpath : EditSVGpath,
                hasSpinner: isSaving,
                disabled: isSaving,
              }}
              isExpanded={isExpanded}
              isExpandable
              onExpand={() => handleExpand(row.id)}
              onClose={() => handleClose(row.id)}
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
