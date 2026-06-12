import { useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];

export default function ChipsContactDaysToggleStateExample(): JSX.Element {
  const [valgteDager, setValgteDager] = useState<string[]>([
    dager[0],
    dager[2],
  ]);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'kontakt-dager-heading'} hasSpacing>
        {'Jeg kan kontaktes på'}
      </Heading>
      <Chips ariaLabelledBy={'kontakt-dager-heading'}>
        {dager.map((dag) => (
          <Chips.Toggle
            key={dag}
            isSelected={valgteDager.includes(dag)}
            onClick={() => {
              setValgteDager((forrige) =>
                forrige.includes(dag)
                  ? forrige.filter((x) => x !== dag)
                  : [...forrige, dag]
              );
            }}
          >
            {dag}
          </Chips.Toggle>
        ))}
      </Chips>
    </div>
  );
}
