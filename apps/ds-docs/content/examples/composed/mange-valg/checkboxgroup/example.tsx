import { type JSX } from 'react';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupExample(): JSX.Element {
  const options = [
    {
      label: 'Har barn over 16 år',
    },
    {
      label:
        'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning',
    },
    {
      label:
        'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov',
    },
    {
      label: 'Er enslig forsørger',
    },
  ];

  return (
    <CheckboxGroup legend={'Velg det som gjelder deg'}>
      {options.map((option, index) => {
        return (
          <CheckboxGroup.Checkbox key={index}>
            {option.label}
          </CheckboxGroup.Checkbox>
        );
      })}
    </CheckboxGroup>
  );
}
