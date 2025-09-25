import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { comboboxStoryOptions } from './combobox.stories.utils';

export const ComboboxLoadingStatesExample = (): JSX.Element => {
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<typeof comboboxStoryOptions>(
    []
  );
  const [searchValue, setSearchValue] = useState('');

  console.info('Søkeverdi:', searchValue);

  const simulateAsyncSearch = (value: string): void => {
    setAsyncLoading(true);
    setAsyncOptions([]);

    // Simuler API-kall
    setTimeout(() => {
      const filteredOptions = comboboxStoryOptions.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      );
      setAsyncOptions(filteredOptions);
      setAsyncLoading(false);
    }, 1500);
  };

  const handleInputChange = (value: string): void => {
    setSearchValue(value);
    if (value.length >= 2) {
      simulateAsyncSearch(value);
    } else {
      setAsyncLoading(false);
      setAsyncOptions([]);
    }
  };

  return (
    <div>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med lastetilstander og asynkront søk. Skriv minst 2 tegn i søkefeltet for å simulere et API-kall som henter alternativer.'
        }
      </Paragraph>

      <Combobox
        label={'Søk i database'}
        placeholder={'Skriv minst 2 tegn for å søke...'}
        isLoading={asyncLoading}
        loadingMessage={'Søker i database...'}
        options={asyncOptions}
        hasSpacing
        onInputChange={handleInputChange}
      />
    </div>
  );
};
