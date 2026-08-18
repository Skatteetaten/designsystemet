import { type JSX, useState } from 'react';

import { Select } from '@skatteetaten/ds-forms';

export default function SelectMonthExample(): JSX.Element {
  const months = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>('Januar');

  return (
    <Select
      label={'Velg måned'}
      value={selectedMonth}
      onChange={(e): void => setSelectedMonth(e.target.value)}
    >
      {months.map((month) => (
        <Select.Option key={month} value={month}>
          {month}
        </Select.Option>
      ))}
    </Select>
  );
}
