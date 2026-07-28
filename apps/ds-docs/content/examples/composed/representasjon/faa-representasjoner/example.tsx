import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me } from './data';

export default function RolePickerWithoutSearchExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {'Brukeren har få representasjoner, og kan velge direkte uten søk:'}
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjon'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={undefined}
        showSubunits={false}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
