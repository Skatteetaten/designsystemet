import { type JSX, useState } from 'react';

import { DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './FraTilDato.module.scss';

export default function FraTilDatoExample(): JSX.Element {
  const [fraDato, setFraDato] = useState<Date | null>(null);
  const [tilDato, setTilDato] = useState<Date | null>(null);

  const isInvalid = fraDato && tilDato && fraDato.getTime() > tilDato.getTime();

  return (
    <Fieldset
      legend={'Periode'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
      hideLegend
    >
      <DatePicker
        label={'Fra dato (dd.mm.åååå)'}
        value={fraDato}
        onSelectDate={setFraDato}
      />
      <DatePicker
        label={'Til dato (dd.mm.åååå)'}
        value={tilDato}
        errorMessage={
          isInvalid ? 'Til-datoen kan ikke være før fra-datoen' : undefined
        }
        onSelectDate={setTilDato}
      />
    </Fieldset>
  );
}
