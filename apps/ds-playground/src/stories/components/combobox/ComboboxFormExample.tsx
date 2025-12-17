import { JSX, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Divider } from '@skatteetaten/ds-content';
import { Combobox, ComboboxOption } from '@skatteetaten/ds-forms';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

const options = [
  {
    label: 'Agdenes',
    value: 'agdenes',
  },
  {
    label: 'Balestrand',
    value: 'balestrand',
  },
  {
    label: 'Finnøy',
    value: 'finnoy',
  },
  {
    label: 'Forsand',
    value: 'forsand',
  },
  {
    label: 'Kvalsund',
    value: 'kvalsund',
  },
  {
    label: 'Mandal',
    value: 'mandal',
  },
  {
    label: 'Midsund',
    value: 'midsund',
  },
  {
    label: 'Rennesøy',
    value: 'rennesoy',
  },
  {
    label: 'Songdalen',
    value: 'songdalen',
  },
  {
    label: 'Tysfjord',
    value: 'tysfjord',
  },
];

const ComboboxFormExample = (): JSX.Element => {
  const [resetKey, setResetKey] = useState(0);
  const [controlledValue, setControlledValue] = useState<ComboboxOption[]>([]);
  const [uncontrolledError, setUncontrolledError] = useState<string>('');
  const [controlledError, setControlledError] = useState<string>('');

  const handleUncontrolledSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setUncontrolledError(''); // Clear previous error

    const formData = new FormData(e.currentTarget);
    const selectedKommuner = formData.getAll('kommuner') as string[];

    if (selectedKommuner.length === 0) {
      setUncontrolledError('Du må velge minst én kommune');
      return;
    }

    alert(`Ukontrollert skjema sendt med: ${selectedKommuner.join(', ')}`);
  };

  const handleReset = (): void => {
    setResetKey((prev) => prev + 1);
    setControlledValue([]); // Reset controlled value
    setUncontrolledError(''); // Reset uncontrolled error state
    setControlledError(''); // Reset controlled error state
  };

  const handleControlledSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setControlledError(''); // Clear previous error

    if (controlledValue.length === 0) {
      setControlledError('Du må velge minst én kommune');
      return;
    }

    alert(
      `Kontrollert skjema sendt med: ${controlledValue.map((option) => option.label).join(', ')}`
    );
  };

  return (
    <div>
      <Heading as={'h3'} level={4} hasSpacing>
        {'Uncontrolled Combobox (kun form state)'}
      </Heading>
      <form onSubmit={handleUncontrolledSubmit}>
        <Combobox
          key={resetKey}
          name={'kommuner'}
          label={'Velg kommuner'}
          placeholder={'Skriv eller velg kommuner'}
          errorMessage={uncontrolledError || undefined}
          options={options}
          multiple
          onSelectionChange={() => setUncontrolledError('')}
          onInputChange={() => setUncontrolledError('')}
        />
        <div className={'flex topSpacingS bottomSpacingS gapXs'}>
          <Button type={'submit'}>{'Send inn ukontrollert'}</Button>
          {uncontrolledError && (
            <Button variant={'danger'} type={'button'} onClick={handleReset}>
              {'Nullstill'}
            </Button>
          )}
        </div>
      </form>
      <Divider spacingBottom={'xs'} spacingTop={'l'} />
      <Heading as={'h3'} level={4} hasSpacing>
        {'Controlled Combobox (med state i komponent)'}
      </Heading>
      <form onSubmit={handleControlledSubmit}>
        <Combobox
          key={`controlled-${resetKey}`}
          name={'kommuner-controlled'}
          label={'Velg kommuner (kontrollert)'}
          placeholder={'Skriv eller velg kommuner'}
          errorMessage={controlledError || undefined}
          options={options}
          multiple
          hasSpacing
          onSelectionChange={(value) => {
            setControlledError('');
            setControlledValue(value);
          }}
          onInputChange={() => setControlledError('')}
        />
        <div className={'flex topSpacingS bottomSpacingS gapXs'}>
          <Button type={'submit'}>{'Send inn kontrollert'}</Button>
          {controlledError && (
            <Button variant={'danger'} type={'button'} onClick={handleReset}>
              {'Nullstill'}
            </Button>
          )}
        </div>
        {controlledValue.length > 0 && (
          <Paragraph hasSpacing>
            {'Valgte verdier: '}
            {controlledValue.map((option) => option.label).join(', ')}
          </Paragraph>
        )}
      </form>
    </div>
  );
};

export default ComboboxFormExample;
