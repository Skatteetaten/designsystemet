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
  const dataCount = generatePerformanceTestData().length;

  useEffect(() => {
    setTimeout(() => {
      const performanceData = generatePerformanceTestData();
      setOptions(performanceData);
      setLoading(false);
    }, 100); // Kort delay for å vise loading state
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner size={'medium'}>{`Laster ${dataCount} elementer...`}</Spinner>
        <Paragraph>
          {`Laster ${dataCount} elementer... Dette er hvordan du bør håndtere store`}
          {'datamengder i virkeligheten.'}
        </Paragraph>
      </div>
    );
  }

  return (
    <div>
      <Combobox
        label={`Store datamengder (${dataCount} elementer)`}
        placeholder={`Søk blant ${dataCount} elementer...`}
        options={options}
        description={`Test med store datamengder. Søk på kommunenavn eller "område"`}
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
  const dataCount = generatePerformanceTestData().length;

  useEffect(() => {
    setTimeout(() => {
      const performanceData = generatePerformanceTestData();
      setOptions(performanceData);
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner size={'medium'}>
          {`Laster ${dataCount} elementer for flervalg`}
        </Spinner>
        <Paragraph>{`Laster ${dataCount} elementer for flervalg-testing`}</Paragraph>
      </div>
    );
  }

  return (
    <div>
      <Combobox
        label={`Store datamengder med flervalg (${dataCount} elementer)`}
        placeholder={`Søk og velg flere blant ${dataCount} elementer`}
        options={options}
        description={`Test flervalg med store datamengder. Søk på kommunenavn eller "område"`}
        multiple
        hasSpacing
      />
    </div>
  );
};
