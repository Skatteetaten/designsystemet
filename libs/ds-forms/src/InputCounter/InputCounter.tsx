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
  const [charCount, setCharCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const input = inputRef?.current;
    if (!input) {
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;

    const updateCount = (): void => {
      setCharCount(input.value.length);
      setIsFocused(false);
    };

    const handleFocus = (): void => {
      setIsFocused(true);
    };

    const handleBlur = (): void => {
      setIsFocused(false);
    };

    updateCount();

    input.addEventListener('focus', handleFocus, { signal });
    input.addEventListener('blur', handleBlur, { signal });
    input.addEventListener('input', updateCount, { signal });
    return (): void => {
      abortController.abort();
    };
  }, [inputRef]);

  useEffect(() => {
    if (value) {
      setCharCount(value.length);
    }
  }, [value]);

  const charactersRemaining = characterLimit - charCount;
  const isOverLimit = charactersRemaining < 0;

  // Setter aria-live til 'polite' når input har fokus eller når teksten er over 85% av tegnbegrensningen, ellers 'off'
  const ariaLive =
    isFocused || charCount >= Math.floor(characterLimit * 0.85)
      ? 'polite'
      : 'off';

  const concatenatedClassName =
    `${styles.inputCounter} ${isOverLimit ? styles.inputCounter_overLimit : ''}`.trim();

  const label = !isOverLimit
    ? t('textarea.CharactersLeft', { ant: charactersRemaining })
    : t('textarea.TooManyCharacters', {
        ant: Math.abs(charactersRemaining),
      });

  return (
    <div
      id={ariaLive === 'polite' ? id : undefined}
      className={concatenatedClassName}
      aria-live={ariaLive}
    >
      {label}
    </div>
  );
};

InputCounter.displayName = 'InputCounter';
