import { type JSX, useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

export default function MutuallyExclusiveGroupsChipsExample(): JSX.Element {
  const contactMethods = ['E-post', 'Telefon', 'SMS'];
  const [selectedMethod, setSelectedMethod] = useState<string>('E-post');

  return (
    <>
      <Heading level={5} as={'h2'} id={'kontakt-method-heading'} hasSpacing>
        {'Jeg ønsker å bli kontaktet på'}
      </Heading>
      <Chips ariaLabelledBy={'kontakt-method-heading'}>
        {contactMethods.map((method) => (
          <Chips.Toggle
            key={method}
            isSelected={selectedMethod === method}
            onClick={(): void => setSelectedMethod(method)}
          >
            {method}
          </Chips.Toggle>
        ))}
      </Chips>
    </>
  );
}
