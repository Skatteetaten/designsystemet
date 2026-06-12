import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  useState,
} from 'react';

import { SearchField } from '@skatteetaten/ds-forms';

import styles from './searchfield.module.scss';

const goToResultPage = (): void => {
  window.location.hash = 'treffliste';
};

const hasSearchIconButton = true;

export default function SearchFieldIconOrTextExample(): ReactElement {
  const [valueWithIcon, setValueWithIcon] = useState<string>('');
  const [valueWithText, setValueWithText] = useState<string>('');

  const handleSearchClick = (_event: MouseEvent<HTMLButtonElement>): void => {
    goToResultPage();
  };

  const handleSearch = (_event: KeyboardEvent<HTMLInputElement>): void => {
    goToResultPage();
  };

  return (
    <div className={styles.container}>
      <SearchField
        label={'Søk med ikonknapp'}
        value={valueWithIcon}
        enableSRNavigationHint={false}
        hideLabel={false}
        hasSearchButtonIcon={hasSearchIconButton}
        onChange={(event): void => setValueWithIcon(event.target.value)}
        onClear={(): void => setValueWithIcon('')}
        onSearch={handleSearch}
        onSearchClick={handleSearchClick}
      />

      <SearchField
        label={'Søk med tekstknapp'}
        value={valueWithText}
        hasSearchButtonIcon={false}
        enableSRNavigationHint={false}
        hideLabel={false}
        onChange={(event): void => setValueWithText(event.target.value)}
        onClear={(): void => setValueWithText('')}
        onSearch={handleSearch}
        onSearchClick={handleSearchClick}
      />
    </div>
  );
}
