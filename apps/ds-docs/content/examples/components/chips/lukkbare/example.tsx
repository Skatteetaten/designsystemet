import { useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const lokasjoner = ['Drammen', 'Oslo', 'Bergen', 'Trondheim'];

export default function ChipsCasesFromRemovableStateExample(): JSX.Element {
  const [filter, setFilter] = useState<string[]>(lokasjoner);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'saker-fra-heading'} hasSpacing>
        {'Viser saker fra'}
      </Heading>
      <Chips ariaLabelledBy={'saker-fra-heading'}>
        {filter.map((lokasjon) => (
          <Chips.Removable
            key={lokasjon}
            onClose={() => {
              setFilter((forrige) => forrige.filter((x) => x !== lokasjon));
            }}
          >
            {lokasjon}
          </Chips.Removable>
        ))}
      </Chips>
    </div>
  );
}
