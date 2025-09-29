import { JSX, useState, useEffect } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Spinner } from '@skatteetaten/ds-progress';
import { Paragraph } from '@skatteetaten/ds-typography';

import { generatePerformanceTestData } from './combobox.stories.utils';

export const ComboboxPerformanceExample = (): JSX.Element => {
  const [options, setOptions] = useState<
    ReturnType<typeof generatePerformanceTestData>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const performanceData = generatePerformanceTestData(5000);
      setOptions(performanceData);
      setLoading(false);
    }, 100); // Kort delay for å vise loading state
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner size={'medium'}>{'Laster 5000 elementer...'}</Spinner>
        <Paragraph>
          {'Laster 5000 elementer... Dette er hvordan du bør håndtere store'}
          {'datamengder i virkeligheten.'}
        </Paragraph>
      </div>
    );
  }

  return (
    <div>
      <Combobox
        label={'Store datamengder (5000 elementer)'}
        placeholder={'Søk blant 5000 elementer...'}
        options={options}
        description={`Test med store datamengder. Søk på "Kommune", "Nord" eller "01"`}
        hasSpacing
      />
    </div>
  );
};

export const ComboboxPerformanceMultipleExample = (): JSX.Element => {
  const [options, setOptions] = useState<
    ReturnType<typeof generatePerformanceTestData>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const performanceData = generatePerformanceTestData(5000);
      setOptions(performanceData);
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner size={'medium'}>
          {'Laster 5000 elementer for flervalg'}
        </Spinner>
        <Paragraph>{'Laster 5000 elementer for flervalg-testing'}</Paragraph>
      </div>
    );
  }

  return (
    <div>
      <Combobox
        label={'Store datamengder med flervalg (5000 elementer)'}
        placeholder={'Søk og velg flere blant 5000 elementer'}
        options={options}
        description={`Test flervalg med store datamengder. Søk på "Kommune", "Nord" eller "01"`}
        multiple
        hasSpacing
      />
    </div>
  );
};
