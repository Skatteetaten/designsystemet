import {
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
  useRef,
  useState,
} from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import { SortState, Table } from '@skatteetaten/ds-table';

import styles from './legg-til-rad.module.scss';

type PersonFormData = {
  personNumber: string;
  lastName: string;
  amount: string;
};

type EditablePersonFormProps = {
  initialData: PersonFormData;
  onSave: (data: PersonFormData) => void;
  onCancel: () => void;
  validateField: (field: string, value: string) => string;
};

const EditablePersonForm = ({
  initialData,
  onSave,
  onCancel,
  validateField,
}: EditablePersonFormProps): ReactElement => {
  const [personNumber, setPersonNumber] = useState(initialData.personNumber);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [amount, setAmount] = useState(initialData.amount);
  const [personNumberError, setPersonNumberError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleBlur = (
    field: string,
    value: string,
    setError: (msg: string) => void
  ): void => {
    const error = validateField(field, value);
    setError(error);
  };

  const handleSave = (): void => {
    const personNumberErr = validateField('personNumber', personNumber);
    const lastNameErr = validateField('lastName', lastName);
    const amountErr = validateField('amount', amount);

    setPersonNumberError(personNumberErr);
    setLastNameError(lastNameErr);
    setAmountError(amountErr);

    if (!personNumberErr && !lastNameErr && !amountErr) {
      onSave({ personNumber, lastName, amount });
    }
  };

  return (
    <>
      <div className={styles.textFieldRow}>
        <TextField
          label={'Fødselsnummer (11 siffer)'}
          value={personNumber}
          errorMessage={personNumberError}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPersonNumber(e.target.value);
            setPersonNumberError('');
          }}
          onBlur={() =>
            handleBlur('personNumber', personNumber, setPersonNumberError)
          }
        />
        <TextField
          label={'Etternavn'}
          value={lastName}
          errorMessage={lastNameError}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
            setLastNameError('');
          }}
          onBlur={() => handleBlur('lastName', lastName, setLastNameError)}
        />
      </div>
      <TextField
        label={'Beløp i kroner'}
        className={styles.belopTextField}
        value={amount}
        errorMessage={amountError}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setAmount(e.target.value);
          setAmountError('');
        }}
        onBlur={() => handleBlur('amount', amount, setAmountError)}
      />
      <div className={styles.buttonRow}>
        <Button onClick={handleSave}>{'Lagre'}</Button>
        <Button variant={'secondary'} onClick={onCancel}>
          {'Avbryt'}
        </Button>
      </div>
    </>
  );
};

export default function TableAddRowExample(): ReactElement {
  const [data, setData] = useState([
    {
      id: 'abc',
      dato: '23.7.2025',
      personNumber: '14487219408',
      firstName: 'Treliters',
      lastName: 'Geir',
      amount: '641693',
    },
    {
      id: 'def',
      dato: '23.8.2025',
      personNumber: '70070903485',
      firstName: 'Ringlete',
      lastName: 'Under',
      amount: '139914',
    },
    {
      id: 'ghi',
      dato: '23.9.2025',
      personNumber: '70168226499',
      firstName: 'Uskikka',
      lastName: 'Resistens',
      amount: '667946',
    },
  ]);

  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const [nextId, setNextId] = useState(4);
  const [addRow, setAddRow] = useState<boolean>(false);
  const [highlightedRowId, setHighlightedRowId] = useState<string | null>(null);
  const addPersonButtonRef = useRef<HTMLButtonElement>(null);
  const addPersonRef = useRef<HTMLDivElement>(null);

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];
    if (!sortKey) return 0;
    if (a[sortKey] === b[sortKey]) return 0;
    if (sortState.direction === 'ascending')
      return a[sortKey] > b[sortKey] ? 1 : -1;
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  const handleSaveRow = (
    id: string,
    updated: Partial<(typeof data)[0]>
  ): void => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updated } : row))
    );
  };

  const validateField = (field: string, value: string): string => {
    if (field === 'personNumber') {
      if (value.trim() === '') return 'Fødselsnummer må fylles ut';
      if (value.length !== 11) return 'Fødselsnummer må være 11 siffer';
    }
    if (field === 'lastName') {
      if (value.trim() === '') return 'Etternavn må fylles ut';
    }
    if (field === 'amount') {
      if (value.trim() === '') return 'Beløp må fylles ut';
      if (value !== '' && Number.isNaN(Number(value)))
        return 'Beløp må være et tall';
    }
    return '';
  };

  return (
    <>
      <Button
        ref={addPersonButtonRef}
        className={styles.addButton}
        onClick={(): void => {
          setAddRow(true);
          setTimeout(() => addPersonRef.current?.focus(), 0);
        }}
      >
        {'Legg til person'}
      </Button>
      <Table
        caption={'Personoversikt'}
        rowInEditModeId={addRow ? 'addPerson' : undefined}
        sortState={sortState}
        setSortState={setSortState}
        size={'extraSmall'}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} sortKey={'dato'} isSortable>
              {'Sist endret'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Fødselsnummer'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'} alignment={'right'}>
              {'Beløp'}
            </Table.HeaderCell>
            <Table.HeaderCell as={'td'} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {addRow && (
            <Table.EditableRow
              id={'addPerson'}
              editButtonPosition={'right'}
              editableContent={(closeEditing: () => void): ReactNode => (
                <EditablePersonForm
                  initialData={{ personNumber: '', lastName: '', amount: '' }}
                  validateField={validateField}
                  onSave={(formData) => {
                    const newRow = {
                      id: nextId.toString(),
                      dato: new Date().toLocaleDateString('no-NO'),
                      personNumber: formData.personNumber,
                      firstName: '',
                      lastName: formData.lastName,
                      amount: formData.amount,
                    };
                    setData((prev) => [newRow, ...prev]);
                    setHighlightedRowId(newRow.id);
                    setNextId((prev) => prev + 1);
                    setAddRow(false);
                    closeEditing();
                    setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                    setTimeout(() => setHighlightedRowId(null), 3000);
                  }}
                  onCancel={() => {
                    setAddRow(false);
                    closeEditing();
                    setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                  }}
                />
              )}
              isNew
            >
              <Table.DataCell colSpan={4}>
                <div ref={addPersonRef} tabIndex={-1}>
                  {'Legg til person'}
                </div>
              </Table.DataCell>
            </Table.EditableRow>
          )}
          {sortedData.map((person) => (
            <Table.EditableRow
              key={person.id}
              className={person.id === highlightedRowId ? 'highlightRow' : ''}
              editButtonPosition={'right'}
              editableContent={(closeEditing: () => void): ReactNode => (
                <EditablePersonForm
                  initialData={{
                    personNumber: person.personNumber,
                    lastName: person.lastName,
                    amount: person.amount,
                  }}
                  validateField={validateField}
                  onSave={(formData) => {
                    handleSaveRow(person.id, {
                      dato: new Date().toLocaleDateString('no-NO'),
                      personNumber: formData.personNumber,
                      lastName: formData.lastName,
                      amount: formData.amount,
                    });
                    closeEditing();
                  }}
                  onCancel={() => {
                    closeEditing();
                  }}
                />
              )}
            >
              <Table.DataCell>{person.dato}</Table.DataCell>
              <Table.DataCell>
                {formatNationalIdentityNumber(person.personNumber)}
              </Table.DataCell>
              <Table.DataCell>{`${person.firstName} ${person.lastName}`}</Table.DataCell>
              <Table.DataCell
                alignment={'right'}
              >{`${person.amount} kr`}</Table.DataCell>
            </Table.EditableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
