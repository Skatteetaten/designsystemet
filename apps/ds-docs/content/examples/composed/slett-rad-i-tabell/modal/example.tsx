import { type ReactElement, useEffect, useRef, useState } from 'react';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { DeleteSVGpath } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

const initialData = [
  {
    id: 'abc',
    dato: '23.7.2025',
    task: 'Klage på vedtak',
    name: 'Treliters Geir',
  },
  {
    id: 'def',
    dato: '23.8.2025',
    task: 'Krav om ettergivelse',
    name: 'Ringlete Under',
  },
  {
    id: 'ghi',
    dato: '23.9.2025',
    task: 'Søknad om fritak',
    name: 'Uskikka Resistens',
  },
];

export default function TableDeleteRowPermanentExample(): ReactElement {
  const [data, setData] = useState(initialData);
  const [rowToDeleteId, setRowToDeleteId] = useState<string | null>(null);
  const [focusTargetId, setFocusTargetId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const emptyMessageRef = useRef<HTMLParagraphElement>(null);
  const focusTargetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focusTargetId === null) return;
    if (focusTargetId === 'empty') {
      emptyMessageRef.current?.focus();
    } else {
      focusTargetRef.current?.focus();
    }
    setFocusTargetId(null);
  }, [focusTargetId]);

  const rowToDelete = data.find((row) => row.id === rowToDeleteId);

  const openModal = (id: string): void => {
    setRowToDeleteId(id);
    modalRef.current?.showModal();
  };

  const closeModal = (): void => {
    modalRef.current?.close();
    setRowToDeleteId(null);
  };

  const handleModalClose = (): void => {
    setFocusTargetId(rowToDeleteId);
    setRowToDeleteId(null);
  };

  const handleCancel = (): void => {
    modalRef.current?.close();
    handleModalClose();
  };

  const handleDelete = (): void => {
    const index = data.findIndex((row) => row.id === rowToDeleteId);
    const focusRow = data[index - 1] ?? data[index + 1];
    closeModal();
    setData((prev) => prev.filter((row) => row.id !== rowToDeleteId));
    setFocusTargetId(focusRow?.id ?? 'empty');
  };

  return (
    <div className={styles.container}>
      <Table caption={'Arbeidsoppgaver'} size={'small'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'}>{'Opprettet'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>
              {'Arbeidsoppgave'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
            <Table.HeaderCell as={'td'} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((person) => (
            <Table.Row key={person.id}>
              <Table.DataCell>{person.dato}</Table.DataCell>
              <Table.DataCell>{person.task}</Table.DataCell>
              <Table.DataCell>{person.name}</Table.DataCell>
              <Table.DataCell>
                <InlineButton
                  ref={person.id === focusTargetId ? focusTargetRef : undefined}
                  svgPath={DeleteSVGpath}
                  onClick={(): void => openModal(person.id)}
                >
                  {'Slett'}
                </InlineButton>
              </Table.DataCell>
            </Table.Row>
          ))}
          {data.length === 0 && (
            <Table.Row>
              <Table.DataCell colSpan={4}>
                <Paragraph ref={emptyMessageRef} canBeManuallyFocused>
                  {`Tabellen er tom.`}
                </Paragraph>
              </Table.DataCell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Modal
        ref={modalRef}
        title={'Slette arbeidsoppgave?'}
        onClose={handleModalClose}
      >
        <Paragraph hasSpacing>
          {`Arbeidsoppgaven "${rowToDelete?.task}" for ${rowToDelete?.name} blir slettet permanent.`}
        </Paragraph>
        <div className={styles.modalButtons}>
          <Button
            variant={'danger'}
            svgPath={DeleteSVGpath}
            onClick={handleDelete}
          >
            {'Slett arbeidsoppgave'}
          </Button>
          <Button variant={'secondary'} onClick={handleCancel}>
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
