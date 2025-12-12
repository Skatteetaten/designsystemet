import { useState, type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

import { comboboxStoryOptions } from './combobox.stories.utils';
import './ComboboxMaxHeightExample.scss';

const codeExample = `.maxHeight {
  max-height: 7rem;
  padding: 2px;
  border-bottom: 1px solid var(--palette-graphite-50);
  overflow-y: auto;

  -webkit-mask-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 100%) 80%,
    rgb(0 0 0 / 0%)
  );
  mask-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 100%) 80%,
    rgb(0 0 0 / 20%)
  );
}

<Combobox
  label="Velg kommuner"
  options={options}
  multiple
  classNames={{
    inputList: 'maxHeight',
  }}
  // ... andre props
/>`;

export const ComboboxMaxHeightInputListExample = (): JSX.Element => {
  const [selectedMultiple, setSelectedMultiple] = useState<ComboboxOption[]>(
    comboboxStoryOptions.slice(0, 20)
  );

  return (
    <div className={'comboboxMaxHeightExamples'}>
      <div className={'example-section'}>
        <h3>{'Flervalg med begrenset høyde på input liste'}</h3>
        <Combobox
          label={'Velg kommuner'}
          options={comboboxStoryOptions}
          value={selectedMultiple.map((opt) => opt.value)}
          classNames={{
            inputList: 'maxHeight',
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
