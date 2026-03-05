import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { generatePerformanceTestData } from './combobox.stories.utils';

const ComboboxLoadingStatesExample = (): JSX.Element => {
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<
    ReturnType<typeof generatePerformanceTestData>
  >([]);

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
    if (value.length >= 2) {
      simulateAsyncSearch(value);
    } else {
      setAsyncLoading(false);
      setAsyncOptions([]);
    }
  };

  return (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med lastetilstander og asynkront søk med 5000 elementer.'
        }
      </Paragraph>
      <Paragraph hasSpacing>
        {
          'Skriv minst 2 tegn i søkefeltet for å simulere et API-kall som henter og filtrerer alternativer.'
        }
      </Paragraph>
      <Combobox
        className={'singleCombobox'}
        label={'Avdeling'}
        description={'Skriv minst 2 tegn for å søke'}
        isLoading={asyncLoading}
        options={asyncOptions}
        minSearchLength={2}
        onInputChange={handleInputChange}
      />
    </>
  );
};

export default ComboboxLoadingStatesExample;
