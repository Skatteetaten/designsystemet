import { type JSX, useState } from 'react';

import { DatePicker } from '@skatteetaten/ds-forms';

export default function BesoksdatoExample(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();

  return (
    <DatePicker
      label={'Besøksdato (dd.mm.åååå)'}
      value={selectedDate}
      maxDate={today}
      onSelectDate={setSelectedDate}
    />
  );
}
