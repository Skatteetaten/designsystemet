import { JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { ArchiveOutlineSVGpath } from '@skatteetaten/ds-icons';

export default function InlineButtonIconRightStateExample(): JSX.Element {
  return (
    <InlineButton svgPath={ArchiveOutlineSVGpath} iconPosition={'right'}>
      {'Lagre i arkiv'}
    </InlineButton>
  );
}
