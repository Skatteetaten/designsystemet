import { type ChangeEvent, type ReactElement, useState } from 'react';

import { Select } from '@skatteetaten/ds-forms';

type Fruit = '' | 'banan' | 'eple' | 'kiwi' | 'paere' | 'sitron';

export default function SelectStandardExample(): ReactElement {
  const [fruit, setFruit] = useState<Fruit>('');

  return (
    <Select
      label={'Fruktsort'}
      value={fruit}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLSelectElement>): void =>
        setFruit(event.target.value as Fruit)
      }
    >
      <Select.Option<Fruit> value={'banan'}>{'Banan'}</Select.Option>
      <Select.Option<Fruit> value={'eple'}>{'Eple'}</Select.Option>
      <Select.Option<Fruit> value={'kiwi'}>{'Kiwi'}</Select.Option>
      <Select.Option<Fruit> value={'paere'}>{'Pære'}</Select.Option>
      <Select.Option<Fruit> value={'sitron'}>{'Sitron'}</Select.Option>
    </Select>
  );
}
