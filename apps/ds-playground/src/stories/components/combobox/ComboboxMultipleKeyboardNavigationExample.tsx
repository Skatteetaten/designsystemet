import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { comboboxStoryOptions } from './combobox.stories.utils';

export const ComboboxMultipleKeyboardNavigationExample = (): JSX.Element => {
  const [currentAction, setCurrentAction] = useState<string>(
    'Klikk i feltet og bruk tastaturet'
  );
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleFocus = (): void => {
    setCurrentAction('Feltet er fokuseret - bruk piltaster for å navigere');
  };

  const handleSelectionChange = (
    options: Array<{ label: string; value: string }>
  ): void => {
    const newValues = options.map((option) => option.value);
    setSelectedValues(newValues);

    if (options.length === 0) {
      setCurrentAction('Alle valg fjernet');
    } else {
      setCurrentAction(`${options.length} valg aktivt`);
    }
  };

  const handleBlur = (): void => {
    setCurrentAction('Feltet mistet fokus');
  };

  return (
    <div>
      <div>
        <h3>{'Tastaturnavigasjon for flervalg:'}</h3>

        <div>
          <strong>{'Navigasjon:'}</strong>
          <ul>
            <li>
              <kbd>{'↓'}</kbd> {': Åpne dropdown og '}
              {'fokuser første alternativ (eller naviger ned)'}
            </li>
            <li>
              <kbd>{'↑'}</kbd> {': Naviger opp i listen '}
              {'(kun når dropdown er åpen)'}
            </li>
            <li>
              <kbd>{'Alt + ↓'}</kbd> {': Åpne dropdown '}
              {'uten å flytte fokus'}
            </li>
            <li>
              <kbd>{'Alt + ↑'}</kbd> {': Lukk dropdown '}
              {'og returner fokus til input'}
            </li>
            <li>
              <kbd>{'Tab'}</kbd> {': Lukk dropdown og gå '}
              {'til neste felt'}
            </li>
          </ul>
        </div>
        <div>
          <strong>{'Valg og kontroll (flervalg):'}</strong>
          <ul>
            <li>
              <kbd>{'Enter'}</kbd> {': Velg/fjern fokusert '}
              {'alternativ (toggle)'}
            </li>
            <li>
              <kbd>{'Escape'}</kbd> {': Lukk dropdown '}
              {'ELLER tøm søkefeltet (hvis dropdown lukket)'}
            </li>
            <li>
              <kbd>{'Backspace'}</kbd> {': Fjern siste '}
              {'valgte alternativ (kun når input-feltet er tomt)'}
            </li>
          </ul>
        </div>

        <Paragraph>
          <strong>{'Status:'}</strong>
        </Paragraph>
        <Paragraph hasSpacing>
          <em className={'bottomSpacingL'}>{currentAction}</em>
        </Paragraph>

        {selectedValues.length > 0 && (
          <Paragraph hasSpacing>
            <strong>{'Valgte verdier:'}</strong> {selectedValues.join(', ')}
          </Paragraph>
        )}
      </div>

      <Combobox
        variant={'large'}
        label={'Test tastaturnavigasjon for flervalg'}
        placeholder={'Klikk her og bruk tastaturet for å velge flere'}
        options={comboboxStoryOptions.slice(0, 10)}
        value={selectedValues}
        maxSelected={5}
        multiple
        hasSpacing
        onFocus={handleFocus}
        onSelectionChange={handleSelectionChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
