import { JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { InputCounterProps } from './InputCounter.types';

import styles from './InputCounter.module.scss';

export const InputCounter = ({
  id,
  inputRef,
  value,
  characterLimit,
}: InputCounterProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const [uncontrolledCharCount, setUncontrolledCharCount] = useState(0);
  const charCount = value !== undefined ? value.length : uncontrolledCharCount;

  const charactersRemaining = characterLimit - charCount;
  const isOverLimit = charactersRemaining < 0;

  const getLabel = (count: number): string => {
    const remainingCharacters = characterLimit - count;

    return remainingCharacters >= 0
      ? t('textarea.CharactersLeft', { ant: remainingCharacters })
      : t('textarea.TooManyCharacters', {
          ant: Math.abs(remainingCharacters),
        });
  };

  const label = getLabel(charCount);
  const [screenReaderLabel, setScreenReaderLabel] = useState(label);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setScreenReaderLabel(label);
    }, 1000);

    return (): void => {
      window.clearTimeout(timeoutId);
    };
  }, [label]);

  // Lytter til native input kun i ukontrollert modus.
  useEffect(() => {
    if (value !== undefined) {
      return;
    }

    const input = inputRef?.current;
    if (!input) {
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;

    const updateCount = (): void => {
      setUncontrolledCharCount(input.value.length);
    };

    updateCount();

    input.addEventListener('input', updateCount, { signal });
    return (): void => {
      abortController.abort();
    };
  }, [inputRef, value]);

  const concatenatedClassName =
    `${styles.inputCounter} ${isOverLimit ? styles.inputCounter_overLimit : ''}`.trim();

  return (
    <>
      <div className={concatenatedClassName} aria-hidden>
        {label}
      </div>
      <span id={id} className={styles.srOnly} aria-live={'polite'}>
        {screenReaderLabel}
      </span>
    </>
  );
};

InputCounter.displayName = 'InputCounter';
