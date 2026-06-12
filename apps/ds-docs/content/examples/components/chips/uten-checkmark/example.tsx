import { useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const lokasjoner = ['Drammen', 'Oslo', 'Bergen', 'Trondheim'];

export default function ChipsOfficeLocationToggleNoCheckmarkStateExample(): JSX.Element {
  const [valgteLokasjoner, setValgteLokasjoner] = useState<string[]>([
    lokasjoner[1],
    lokasjoner[3],
  ]);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'kontorsted-heading'} hasSpacing>
        {'Kontorsted'}
      </Heading>
      <Chips ariaLabelledBy={'kontorsted-heading'}>
        {lokasjoner.map((lokasjon) => (
          <Chips.Toggle
            key={lokasjon}
            showCheckmark={false}
            isSelected={valgteLokasjoner.includes(lokasjon)}
            onClick={() => {
              setValgteLokasjoner((forrige) =>
                forrige.includes(lokasjon)
                  ? forrige.filter((x) => x !== lokasjon)
                  : [...forrige, lokasjon]
              );
            }}
          >
            {lokasjon}
          </Chips.Toggle>
        ))}
      </Chips>
    </div>
  );
}
