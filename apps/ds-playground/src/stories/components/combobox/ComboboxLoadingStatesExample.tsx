import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { generatePerformanceTestData } from './combobox.stories.utils';

export const ComboboxLoadingStatesExample = (): JSX.Element => {
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<
    ReturnType<typeof generatePerformanceTestData>
  >([]);
  const [searchValue, setSearchValue] = useState('');

  console.info('Søkeverdi:', searchValue);

  const simulateAsyncSearch = (value: string): void => {
    setAsyncLoading(true);
    setAsyncOptions([]);

    const startTime = performance.now();

    const performanceData = generatePerformanceTestData(5000);
    const filteredOptions = performanceData.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );

    const processingTime = performance.now() - startTime;

    const loadingDuration = Math.max(processingTime + 100, 500); // Minimum 500ms for UX

    setTimeout(() => {
      setAsyncOptions(filteredOptions);
      setAsyncLoading(false);
    }, loadingDuration);
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
          'Eksempel på bruk av combobox med lastetilstander og asynkront søk med 5000 elementer. Skriv minst 2 tegn i søkefeltet for å simulere et API-kall som henter og filtrerer alternativer.'
        }
      </Paragraph>

      <Combobox
        label={'Søk i database (5000 elementer)'}
        placeholder={'Skriv minst 2 tegn for å søke blant 5000 elementer'}
        isLoading={asyncLoading}
        spinnerLabel={'Søker'}
        options={asyncOptions}
        minSearchLength={2}
        hasSpacing
        onInputChange={handleInputChange}
      />
    </div>
  );
};
