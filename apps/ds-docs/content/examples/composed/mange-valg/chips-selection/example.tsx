import { type JSX, useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

export default function ChipsSelectionExample(): JSX.Element {
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
    <>
      <Heading level={5} as={'h2'} id={'month-heading'} hasSpacing>
        {'Velg måned'}
      </Heading>
      <Chips ariaLabelledBy={'month-heading'}>
        {months.map((month) => (
          <Chips.Toggle
            key={month}
            isSelected={selectedMonth === month}
            showCheckmark={false}
            onClick={(): void => setSelectedMonth(month)}
          >
            {month}
          </Chips.Toggle>
        ))}
      </Chips>
    </>
  );
}
