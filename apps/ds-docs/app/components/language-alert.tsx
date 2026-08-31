import { JSX, useEffect, useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Alert } from '@skatteetaten/ds-status';

import styles from './language-alert.module.scss';

const languageAvailabilityMessages: Partial<Record<string, string>> = {
  en_GB: 'This page is not available in English',
  nn_NO: 'Denne sida er ikkje tilgjengeleg på nynorsk',
};

const LanguageAlert = (): JSX.Element => {
  const [selectedLang, setSelectedLang] = useState<string>(dsI18n.language);

  useEffect(() => {
    const handleLanguageChange = (language: string): void => {
      setSelectedLang(language);
    };

    dsI18n.on('languageChanged', handleLanguageChange);

    return (): void => {
      dsI18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <Alert
      className={styles.languageAlert}
      variant={'info'}
      showAlert={selectedLang !== 'nb_NO'}
      onClose={() => dsI18n.changeLanguage('nb_NO')}
    >
      {languageAvailabilityMessages[selectedLang]}
    </Alert>
  );
};

export { LanguageAlert };
