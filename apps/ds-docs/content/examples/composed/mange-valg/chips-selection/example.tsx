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
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string): void => {
    setSelectedMonths((previous) =>
      previous.includes(month)
        ? previous.filter((selected) => selected !== month)
        : [...previous, month]
    );
  };

  return (
    <>
      <Heading level={5} as={'h2'} id={'month-heading'} hasSpacing>
        {'Velg måneder'}
      </Heading>
      <Chips ariaLabelledBy={'month-heading'}>
        {months.map((month) => (
          <Chips.Toggle
            key={month}
            isSelected={selectedMonths.includes(month)}
            showCheckmark={false}
            onClick={(): void => toggleMonth(month)}
          >
            {month}
          </Chips.Toggle>
        ))}
      </Chips>
    </>
  );
}
