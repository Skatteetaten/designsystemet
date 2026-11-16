import { type ReactElement } from 'react';

import { Select } from '@skatteetaten/ds-forms';

type Fruit = '' | 'banan' | 'eple' | 'kiwi' | 'paere' | 'sitron';

export default function SelectReadOnlyExample(): ReactElement {
  return (
    <Select
      label={'Fruktsort'}
      name={'fruktsort'}
      defaultValue={'eple'}
      readOnly
    >
      <Select.Option<Fruit> value={'banan'}>{'Banan'}</Select.Option>
      <Select.Option<Fruit> value={'eple'}>{'Eple'}</Select.Option>
      <Select.Option<Fruit> value={'kiwi'}>{'Kiwi'}</Select.Option>
      <Select.Option<Fruit> value={'paere'}>{'Pære'}</Select.Option>
      <Select.Option<Fruit> value={'sitron'}>{'Sitron'}</Select.Option>
    </Select>
  );
}
