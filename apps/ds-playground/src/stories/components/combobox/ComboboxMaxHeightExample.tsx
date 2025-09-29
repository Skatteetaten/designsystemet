import { useState, type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

import './ComboboxMaxHeightExample.scss';

const manyOptions: ComboboxOption[] = [
  { label: 'Agurk', value: 'agurk' },
  { label: 'Tomat', value: 'tomat' },
  { label: 'Mais', value: 'mais' },
  { label: 'Paprika', value: 'paprika' },
  { label: 'Squash', value: 'squash' },
  { label: 'Rucola', value: 'rucola' },
  { label: 'Spinat', value: 'spinat' },
  { label: 'Søtpotet', value: 'sotpotet' },
  { label: 'Brokkoli', value: 'brokkoli' },
  { label: 'Blomkål', value: 'blomkal' },
  { label: 'Gulrot', value: 'gulrot' },
  { label: 'Løk', value: 'lok' },
  { label: 'Hvitløk', value: 'hvitlok' },
  { label: 'Selleri', value: 'selleri' },
  { label: 'Aubergine', value: 'aubergine' },
  { label: 'Zucchini', value: 'zucchini' },
  { label: 'Hodekål', value: 'hodekal' },
  { label: 'Rosenkål', value: 'rosenkal' },
  { label: 'Grønnkål', value: 'gronnkal' },
  { label: 'Salat', value: 'salat' },
  { label: 'Isbergsalat', value: 'isbergsalat' },
  { label: 'Feldsalat', value: 'feldsalat' },
  { label: 'Endivie', value: 'endivie' },
  { label: 'Radicchio', value: 'radicchio' },
];

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
          label={'Velg grønnsak'}
          options={manyOptions}
          value={selectedValue?.value}
          hasSpacing
          onSelectionChange={setSelectedValue}
        />
      </div>

      <div className={'example-section'}>
        <h3>{'Begrenset høyde - 300px'}</h3>
        <Combobox
          label={'Velg grønnsak (maks 300px høyde)'}
          options={manyOptions}
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
          label={'Velg grønnsaker (maks 200px høyde)'}
          options={manyOptions}
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
          <code>{`/* ComboboxMaxHeightExample.scss */
.maxHeight300 {
  max-height: 300px;
}

.maxHeight200 {
  max-height: 200px;
}

/* Bruk i Combobox */
<Combobox
  label="Velg grønnsak"
  options={options}
  classNames={{
    options: 'maxHeight300',
  }}
  // ... andre props
/>`}</code>
        </pre>
      </div>
    </div>
  );
};
