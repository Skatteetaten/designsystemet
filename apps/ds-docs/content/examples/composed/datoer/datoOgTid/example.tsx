import { type JSX, useState } from 'react';

import { Combobox, DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './DatoOgTid.module.scss';

const timeOptions = [
  { value: '08:00', label: '08:00' },
  { value: '08:30', label: '08:30' },
  { value: '09:00', label: '09:00' },
  { value: '09:30', label: '09:30' },
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
  { value: '11:00', label: '11:00' },
  { value: '11:30', label: '11:30' },
  { value: '12:00', label: '12:00' },
  { value: '12:30', label: '12:30' },
  { value: '13:00', label: '13:00' },
  { value: '13:30', label: '13:30' },
  { value: '14:00', label: '14:00' },
  { value: '14:30', label: '14:30' },
  { value: '15:00', label: '15:00' },
  { value: '15:30', label: '15:30' },
  { value: '16:00', label: '16:00' },
];

export default function DatoOgTidExample(): JSX.Element {
  const [dato, setDato] = useState<Date | null>(null);
  const [tid, setTid] = useState<string>('');

  return (
    <Fieldset
      legend={'Dato og tid'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
      hideLegend
    >
      <DatePicker
        label={'Dato (dd.mm.åååå)'}
        value={dato}
        onSelectDate={(date: Date | null): void => setDato(date)}
      />
      <Combobox
        label={'Tid (tt:mm)'}
        value={tid}
        options={timeOptions}
        className={styles.timeInput}
        onSelectionChange={(option) => setTid(option?.value ?? '')}
      />
    </Fieldset>
  );
}
