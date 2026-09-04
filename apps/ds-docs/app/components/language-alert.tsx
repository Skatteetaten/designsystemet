import { JSX, useEffect, useRef, useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Alert } from '@skatteetaten/ds-status';

import styles from './language-alert.module.scss';

const languageAvailabilityMessages: Partial<Record<string, string>> = {
  en_GB: 'This page is not available in English',
  nn_NO: 'Denne sida er ikkje tilgjengeleg på nynorsk',
};

const LanguageAlert = (): JSX.Element => {
  const [selectedLang, setSelectedLang] = useState<string>(dsI18n.language);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLanguageChange = (language: string): void => {
      setSelectedLang(language);
    };

    dsI18n.on('languageChanged', handleLanguageChange);

    return (): void => {
      dsI18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleClose = (): void => {
    dsI18n.changeLanguage('nb_NO');

    const sectionElement = ref.current?.closest('section');
    if (sectionElement) {
      (sectionElement as HTMLElement).focus();
    }
  };

  return (
    <Alert
      ref={ref}
      className={styles.languageAlert}
      variant={'info'}
      showAlert={selectedLang !== 'nb_NO'}
      onClose={handleClose}
    >
      {languageAvailabilityMessages[selectedLang]}
    </Alert>
  );
};

export { LanguageAlert };
