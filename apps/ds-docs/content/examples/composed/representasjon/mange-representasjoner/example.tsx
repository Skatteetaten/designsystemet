import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, people } from './data';

export default function RolePickerDefaultExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {'Brukeren har mange representasjoner og kan søke i listen:'}
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis mange representasjoner'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={people}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
