import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

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
