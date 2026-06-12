import { type ReactElement } from 'react';

import { Paragraph } from '@skatteetaten/ds-typography';
import { Popover } from '@skatteetaten/ds-overlays';

export default function PopoverStandardExample(): ReactElement {
  return (
    <Popover>
      <Popover.Trigger title={'Vis forklaring'} />
      <Popover.Content>
        <Paragraph>
          {'Popover brukes til korte forklaringer ved behov.'}
        </Paragraph>
      </Popover.Content>
    </Popover>
  );
}
