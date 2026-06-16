import { type ReactElement, useState } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

export default function PopoverControlledExample(): ReactElement {
  const controlledId = 'popover-controlled-heading';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.row}>
      <Heading id={controlledId} as={'h2'}>
        {'Controlled Popover'}
      </Heading>
      <Popover
        position={'bottomStart'}
        color={'ochre'}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
      >
        <Popover.Trigger
          ariaDescribedby={controlledId}
          className={styles.triggerSpacing}
          onClick={(): void => setIsOpen(!isOpen)}
        />
        <Popover.Content>
          {
            'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret bestar av en bokstav etterfulgt av fire tall, f.eks. H0101.'
          }
        </Popover.Content>
      </Popover>
    </div>
  );
}
