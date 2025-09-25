import { ReactNode, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

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
      alert(`Valgt fylke: ${selectedValue.label}`);
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
          'Eksempel på bruk av combobox med validering og feilmelding ved innsending. Trykk på "Send inn" uten å velge et fylke for å se feilmeldingen.'
        }
      </Paragraph>
      <Combobox
        label={'Velg ditt fylke'}
        placeholder={'Søk eller velg fylke'}
        errorMessage={showError ? 'Du må velge et fylke' : undefined}
        options={[
          { label: 'Oslo', value: 'oslo' },
          { label: 'Akershus', value: 'akershus' },
          { label: 'Østfold', value: 'østfold' },
          { label: 'Buskerud', value: 'buskerud' },
          { label: 'Vestfold', value: 'vestfold' },
          { label: 'Telemark', value: 'telemark' },
          { label: 'Aust-Agder', value: 'aust-agder' },
          { label: 'Vest-Agder', value: 'vest-agder' },
          { label: 'Rogaland', value: 'rogaland' },
          { label: 'Hordaland', value: 'hordaland' },
          { label: 'Sogn og Fjordane', value: 'sogn-og-fjordane' },
          { label: 'Møre og Romsdal', value: 'more-og-romsdal' },
          { label: 'Sør-Trøndelag', value: 'sor-trondelag' },
          { label: 'Nord-Trøndelag', value: 'nord-trondelag' },
          { label: 'Nordland', value: 'nordland' },
          { label: 'Troms', value: 'troms' },
          { label: 'Finnmark', value: 'finnmark' },
        ]}
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
