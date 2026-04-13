import { JSX, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { kommuneOptions } from './combobox.stories.utils';

const ComboboxValidationExample = (): JSX.Element => {
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
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med validering og feilmelding ved innsending.'
        }
      </Paragraph>
      <Paragraph hasSpacing>
        {'Trykk på "Send inn" uten å velge en kommune for å se feilmeldingen.'}
      </Paragraph>
      <Combobox
        className={'singleCombobox'}
        label={'Kommune'}
        errorMessage={showError ? 'Kommune må fylles ut' : undefined}
        options={kommuneOptions}
        hasSpacing
        required
        onSelectionChange={handleSelectionChange}
      />

      <Button onClick={handleSubmit}>{'Send inn'}</Button>
    </>
  );
};

export default ComboboxValidationExample;
