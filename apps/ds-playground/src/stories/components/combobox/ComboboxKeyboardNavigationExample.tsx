import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { comboboxStoryOptions } from './combobox.stories.utils';

export const ComboboxKeyboardNavigationExample = (): JSX.Element => {
  const [currentAction, setCurrentAction] = useState<string>(
    'Klikk i feltet og bruk tastaturet'
  );

  const handleFocus = (): void => {
    setCurrentAction('Feltet er fokusert - bruk piltaster for å navigere');
  };

  const handleInputChange = (value: string): void => {
    if (value) {
      setCurrentAction(`Søker etter: "${value}"`);
    } else {
      setCurrentAction('Søkefeltet er tomt - bruk piltaster for å åpne listen');
    }
  };

  const handleBlur = (): void => {
    setCurrentAction('Feltet mistet fokus');
  };

  return (
    <div>
      <div>
        <h3>{'Tastaturnavigasjon Guide:'}</h3>

        <div>
          <strong>{'Navigasjon:'}</strong>
          <ul>
            <li>
              <kbd>{'↓'}</kbd> {': Åpne dropdown og'}
              {
                ' fokuser første alternativ, eller naviger ned. Hvis fokus er på siste alternativ, vil hoppe til det første alternativet.'
              }
            </li>
            <li>
              <kbd>{'↑'}</kbd> {': Naviger opp i listen, når den er åpen'}
              {' Hvis fokus er på første alternativ, vil dropdown lukkes.'}
            </li>
            <li>
              <kbd>{'Tab'}</kbd> {': Lukk dropdown og gå'}
              {' til neste felt'}
            </li>
          </ul>
        </div>
        <div>
          <strong>{'Valg og kontroll:'}</strong>
          <ul>
            <li>
              <kbd>{'Enter'}</kbd> {': Velg fokusert'}
              {'alternativ eller eksakt tekst-match'}
            </li>
            <li>
              <kbd>{'Escape'}</kbd> {': Lukk dropdown'}
              {' ELLER tøm søkefelt (hvis lukket)'}
            </li>
            <li>
              <kbd>{'Backspace'}</kbd> {': Fjern siste'}
              {' valgte alternativ (multi-select, tomt felt)'}
            </li>
          </ul>
        </div>

        <Paragraph>
          <strong>{'Status:'}</strong>
        </Paragraph>
        <Paragraph hasSpacing>
          <em className={'bottomSpacingL'}>{currentAction}</em>
        </Paragraph>
      </div>

      <Combobox
        label={'Test tastaturnavigasjon'}
        placeholder={'Klikk her og bruk tastaturet for å navigere'}
        options={comboboxStoryOptions.slice(0, 10)}
        hasSpacing
        onFocus={handleFocus}
        onInputChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
