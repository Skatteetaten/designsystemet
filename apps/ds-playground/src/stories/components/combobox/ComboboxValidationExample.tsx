import { ReactNode, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { getComboboxStoryOptions } from './combobox.stories.utils';

export const ComboboxValidationExample = (): ReactNode => {
  const [selectedValue, setSelectedValue] = useState<ComboboxOption | null>(
    null
  );
  const [showError, setShowError] = useState(false);

  const handleSubmit = (): void => {
    if (!selectedValue) {
      setShowError(true);
    } else {
      setShowError(false);
      alert(`Valgt kommune: ${selectedValue.label}`);
    }
  };

  const handleSelectionChange = (option: ComboboxOption | null): void => {
    setSelectedValue(option);
    if (option) {
      setShowError(false);
    }
  };

  return (
    <div>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med validering og feilmelding ved innsending. Trykk på "Send inn" uten å velge en kommune for å se feilmeldingen.'
        }
      </Paragraph>
      <Combobox
        label={'Velg din kommune'}
        placeholder={'Søk eller velg kommune'}
        errorMessage={showError ? 'Du må velge en kommune' : undefined}
        options={getComboboxStoryOptions()}
        hasSpacing
        required
        onSelectionChange={handleSelectionChange}
      />

      <Button onClick={handleSubmit}>{'Send inn'}</Button>

      {selectedValue && (
        <div className={'topSpacingS'}>
          <Paragraph hasSpacing={false}>
            {`Valgt: ${selectedValue.label}`}
          </Paragraph>
        </div>
      )}
    </div>
  );
};
