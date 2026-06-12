import { JSX, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Paginated, Person, RolePicker } from '@skatteetaten/ds-overlays';
import { Alert } from '@skatteetaten/ds-status';

const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      dateOfBirth: new Date('1964-02-28'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1932-10-10'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1944-01-26'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1981-07-04'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1984-02-13'),
  type: 'Person',
};

const RolePickerWithAlertExample = (): JSX.Element => {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => {
          rolePickerRef.current?.showModal();
        }}
      >
        {'Åpne representasjonsvelger'}
      </Button>
      <RolePicker ref={rolePickerRef} me={me} people={people}>
        <Alert variant={'warning'} showAlert>
          {
            'Vi kan dessverre ikke vise alle tilgangene dine nå. Vi jobber med å løse feilen. Prøv igjen eller kom tilbake senere.'
          }
        </Alert>
      </RolePicker>
    </>
  );
};

export default RolePickerWithAlertExample;
