import { type JSX, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupExample(): JSX.Element {
  const [favoriteColor, setFavoriteColor] = useState<string>('red');

  return (
    <RadioGroup
      legend={'Favorittfarge'}
      value={favoriteColor}
      required
      onChange={(e): void => setFavoriteColor(e.target.value)}
    >
      <RadioGroup.Radio value={'red'}>{'Rød'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'yellow'}>{'Gul'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'blue'}>{'Blå'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
