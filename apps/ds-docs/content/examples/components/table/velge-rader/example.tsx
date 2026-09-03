import { type ReactElement, useState } from 'react';

import { Checkbox } from '@skatteetaten/ds-forms';
import { Table } from '@skatteetaten/ds-table';

export default function TableSelectableRowsExample(): ReactElement {
  const items = [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045',
      status: 'Iverksatt',
      id: '1',
    },
    {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033',
      status: 'Iverksatt',
      id: '2',
    },
    {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '3',
    },
    {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '4',
    },
    {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '5',
    },
  ];

  const [checkedState, setCheckedState] = useState<Array<number>>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  return (
    <Table caption={'avgiftsstatus'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell as={'td'}>
            <Checkbox
              classNames={{ label: 'checkboxInTable' }}
              checked={isAllChecked}
              hideLabel
              onChange={() => {
                if (isAllChecked) {
                  setCheckedState([]);
                }

                setIsAllChecked(!isAllChecked);
              }}
            >
              {'velg alle rader'}
            </Checkbox>
          </Table.HeaderCell>
          <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
          <Table.HeaderCell>{'Avgiftstype'}</Table.HeaderCell>
          <Table.HeaderCell alignment={'right'}>{'Beløp'}</Table.HeaderCell>
          <Table.HeaderCell>{'Status'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item, index) => (
          <Table.Row key={item.id}>
            <Table.DataCell>
              <Checkbox
                classNames={{ label: 'checkboxInTable' }}
                checked={
                  isAllChecked || checkedState.some((it) => it === index)
                }
                hideLabel
                onChange={(event) => {
                  if (isAllChecked) {
                    setCheckedState(
                      Array.from(Array(items.length).keys()).filter(
                        (it) => it !== index
                      )
                    );
                    setIsAllChecked(false);
                  } else if (event.target.checked) {
                    setCheckedState([index, ...checkedState]);
                  } else {
                    setCheckedState(checkedState.filter((it) => it !== index));
                  }
                }}
              >{`Velg ${item.fastsatt}`}</Checkbox>
            </Table.DataCell>
            <Table.DataCell as={'th'} scope={'row'}>
              {item.fastsatt}
            </Table.DataCell>
            <Table.DataCell>{item.avgiftstype}</Table.DataCell>
            <Table.DataCell alignment={'right'}>{item.beloep}</Table.DataCell>
            <Table.DataCell>{item.status}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
