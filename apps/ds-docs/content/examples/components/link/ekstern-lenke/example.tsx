import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

export default function LinkExternalStateExample(): JSX.Element {
  return (
    <Link href={'https://www.altinn.no'} isExternal>
      {'Til altinn.no'}
    </Link>
  );
}
