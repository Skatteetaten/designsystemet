import { useState, type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

import { comboboxStoryOptions } from './combobox.stories.utils';
import './ComboboxMaxHeightExample.scss';

const codeExample = `/* ComboboxMaxHeightExample.scss */
.maxHeight300 {
  max-height: 300px;
}

.maxHeight200 {
  max-height: 200px;
}

/* Bruk i Combobox */
<Combobox
  label="Velg kommune"
  options={options}
  classNames={{
    options: 'maxHeight300',
  }}
  // ... andre props
/>`;

export const ComboboxMaxHeightExample = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<ComboboxOption | null>(
    null
  );
  const [selectedMultiple, setSelectedMultiple] = useState<ComboboxOption[]>(
    []
  );

  return (
    <div className={'comboboxMaxHeightExamples'}>
      <div className={'example-section'}>
        <h3>{'Standard høyde (ingen begrensning)'}</h3>
        <Combobox
          label={'Velg kommune'}
          options={comboboxStoryOptions}
          value={selectedValue?.value}
          hasSpacing
          onSelectionChange={setSelectedValue}
        />
      </div>

      <div className={'example-section'}>
        <h3>{'Begrenset høyde - 300px'}</h3>
        <Combobox
          label={'Velg kommune (maks 300px høyde)'}
          options={comboboxStoryOptions}
          value={selectedValue?.value}
          classNames={{
            options: 'maxHeight300',
          }}
          hasSpacing
          onSelectionChange={setSelectedValue}
        />
      </div>

      <div className={'example-section'}>
        <h3>{'Flervalg med begrenset høyde - 200px'}</h3>
        <Combobox
          label={'Velg kommuner (maks 200px høyde)'}
          options={comboboxStoryOptions}
          value={selectedMultiple.map((opt) => opt.value)}
          classNames={{
            options: 'maxHeight200',
          }}
          hasSpacing
          multiple
          onSelectionChange={setSelectedMultiple}
        />
      </div>

      <div className={'example-section'}>
        <h3>{'Eksempel på CSS-implementering'}</h3>
        <pre>
          <code>{codeExample}</code>
        </pre>
      </div>
    </div>
  );
};
