import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

export default function ButtonAsLinkStateExample(): JSX.Element {
  return (
    <Button href={'/min-side'} variant={'primary'}>
      {'Til Min side'}
    </Button>
  );
}
