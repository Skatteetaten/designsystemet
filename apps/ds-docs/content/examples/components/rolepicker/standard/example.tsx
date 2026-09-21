import { type ReactElement, useRef, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  RolePicker,
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1984-02-13'),
  type: 'Person',
};

const businesses: Paginated<Business> = {
  total: 2,
  list: [
    {
      name: 'Nordmann Regnskap AS',
      organizationNumber: '123456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Nordmann Regnskap AS Avd. Oslo',
          organizationNumber: '123456790',
          isDeleted: false,
          unitType: 'BEDR',
          type: 'Organization',
          mainOrganizationNumber: '123456789',
        },
      ],
    },
    {
      name: 'Nordmann Konsulenttjenester ENK',
      organizationNumber: '987654321',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
  ],
};

const people: Paginated<Person> = {
  total: 1,
  list: [
    {
      name: 'Kari Nordmann',
      personId: '12039012345',
      dateOfBirth: new Date('1990-03-12'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export default function RolePickerStandardExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const [selectedEntity, setSelectedEntity] =
    useState<string>('Ingen valgt enda');

  return (
    <>
      <Button onClick={(): void => rolePickerRef.current?.showModal()}>
        {'Åpne representasjonsvelger'}
      </Button>
      <Paragraph
        hasSpacing
      >{`Valgt representasjon: ${selectedEntity}`}</Paragraph>

      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={people}
        showDeceasedPeople={false}
        onEntitySelect={async (entity) => {
          setSelectedEntity(entity.name);
          rolePickerRef.current?.close();
        }}
      />
    </>
  );
}
