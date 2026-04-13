import { JSX, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox, ComboboxOption } from '@skatteetaten/ds-forms';
import { Heading } from '@skatteetaten/ds-typography';

import { kommuneOptions } from './combobox.stories.utils';

const ComboboxFormExample = (): JSX.Element => {
  const [controlledValue, setControlledValue] = useState<ComboboxOption[]>([]);
  const [uncontrolledError, setUncontrolledError] = useState<string>('');
  const [controlledError, setControlledError] = useState<string>('');

  const handleUncontrolledSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setUncontrolledError(''); // Clear previous error

    const formData = new FormData(e.currentTarget);
    const selectedKommuner = formData.getAll(
      'kommuner-uncontrolled'
    ) as string[];

    if (selectedKommuner.length === 0) {
      setUncontrolledError('Velg minst én kommune');
      return;
    }

    alert(`Ukontrollert skjema sendt med: ${selectedKommuner.join(', ')}`);
  };

  const handleControlledSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setControlledError(''); // Clear previous error

    if (controlledValue.length === 0) {
      setControlledError('Velg minst én kommune');
      return;
    }

    alert(
      `Kontrollert skjema sendt med: ${controlledValue.map((option) => option.label).join(', ')}`
    );
  };

  return (
    <div className={'multipleCombobox'}>
      <Heading as={'h3'} level={4} hasSpacing>
        {'Uncontrolled Combobox (form state)'}
      </Heading>
      <form onSubmit={handleUncontrolledSubmit}>
        <Combobox
          name={'kommuner-uncontrolled'}
          label={'Kommune'}
          errorMessage={uncontrolledError || undefined}
          options={kommuneOptions}
          multiple
          hasSpacing
          onSelectionChange={() => setUncontrolledError('')}
          onInputChange={() => setUncontrolledError('')}
        />
        <Button type={'submit'} className={'bottomSpacingXL'}>
          {'Send inn'}
        </Button>
      </form>
      <Heading as={'h3'} level={4} hasSpacing>
        {'Controlled Combobox (state i komponent)'}
      </Heading>
      <form onSubmit={handleControlledSubmit}>
        <Combobox
          label={'Kommune'}
          errorMessage={controlledError || undefined}
          options={kommuneOptions}
          multiple
          hasSpacing
          onSelectionChange={(value) => {
            setControlledError('');
            setControlledValue(value);
          }}
          onInputChange={() => setControlledError('')}
        />
        <Button type={'submit'}>{'Send inn'}</Button>
      </form>
    </div>
  );
};

export default ComboboxFormExample;
