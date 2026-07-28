import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, people } from './data';

export default function RolePickerWithErrorExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    return {
      error:
        'Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.',
    };
  };

  return (
    <>
      <Paragraph>
        {
          'Brukeren bytter representasjon, men valgt representasjon mangler tilgang til tjenesten:'
        }
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjon uten tilgang'}
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
