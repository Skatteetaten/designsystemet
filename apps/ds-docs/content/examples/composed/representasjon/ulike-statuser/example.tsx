import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, peopleWithDeceased } from './data';

export default function RolePickerWithStatusesExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {
          'Brukeren har virksomheter og personer med ulike statuser i representasjonslisten:'
        }
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjoner med statuser'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={peopleWithDeceased}
        showInactiveBusinesses
        showDeceasedPeople
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
