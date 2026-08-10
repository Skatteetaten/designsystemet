import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingLevelsStateExample(): JSX.Element {
  return (
    <div>
      <Heading as={'h1'} level={5}>
        {'Kontaktinformasjon'}
      </Heading>
      <Heading as={'h2'} level={2} hasSpacing>
        {'Mine opplysninger'}
      </Heading>
    </div>
  );
}
