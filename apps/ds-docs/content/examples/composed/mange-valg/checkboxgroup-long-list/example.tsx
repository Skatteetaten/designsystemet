import { type JSX } from 'react';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupLongListExample(): JSX.Element {
  const options = [
    'Aksjonærregisteret',
    'Avgifter',
    'Borettslag og sameier',
    'Eiendommer',
    'Folkeregister',
    'Innkreving',
    'Saker og min kommunikasjon',
    'Skatt og inntekt',
    'Valutaregisteret',
  ];

  return (
    <CheckboxGroup legend={'Jeg ønsker innsyn i'}>
      {options.map((option) => (
        <CheckboxGroup.Checkbox key={option}>{option}</CheckboxGroup.Checkbox>
      ))}
    </CheckboxGroup>
  );
}
