import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function LinkOpenInNewTabStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Er det noe du er usikker på, kan du lese'}{' '}
      <Link href={'https://www.nav.no'} target={'_blank'} isExternal>
        {'rettledningen hos Nav (åpnes i ny fane)'}
      </Link>
      {'.'}
    </Paragraph>
  );
}
