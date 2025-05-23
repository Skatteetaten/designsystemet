import { JSX, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, FilterSVGpath, Icon } from '@skatteetaten/ds-icons';

import { RolePickerFilterInputProps } from './RolePickerFilterInput.types';

import styles from './RolePickerFilterInput.module.scss';

export const RolePickerFilterInput = ({
  label,
  value,
  onChange,
  onClear,
}: RolePickerFilterInputProps): JSX.Element => {
  const { t: formsT } = useTranslation('ds_forms', { i18n: dsI18n });
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const inputRef = useRef<HTMLInputElement>(null);
  const [liveRegionContent, setLiveRegionContent] = useState('');
  const [showClearButton, setShowClearButton] = useState(!!value);

  useEffect(() => {
    // Midlertidig tøm innholdet for å tvinge ny kunngjøring
    setLiveRegionContent('');
    const timeoutId = setTimeout(() => {
      setLiveRegionContent(t('rolepicker.SearchResultUpdated'));
    }, 100); // Kort forsinkelse for å sikre at skjermleseren oppdager endringen

    return (): void => clearTimeout(timeoutId);
  }, [value, t]);

  return (
    <div className={styles.topContainer}>
      <div className={styles.searchContainer}>
        <label className={styles.label} htmlFor={'filterInputId'}>
          {label}
        </label>
        <div className={styles.srOnly} id={'liveSearchId'}>
          {t('rolepicker.SearchResultDescription')}
        </div>
        <div
          className={styles.srOnly}
          aria-live={'assertive'}
          aria-atomic={'true'}
        >
          {value ? <div>{liveRegionContent}</div> : null}
        </div>

        <div className={styles.inputWrapper}>
          <input
            ref={inputRef}
            id={'filterInputId'}
            aria-describedby={'liveSearchId'}
            className={styles.input}
            name={'filter'}
            value={value}
            type={'search'}
            onChange={(event) => {
              onChange?.(event);
              if (event.target.value.length) {
                setShowClearButton(true);
              } else {
                setShowClearButton(false);
              }
            }}
          />
          {showClearButton && (
            <IconButton
              type={'reset'}
              className={styles.clearButton}
              size={'extraSmall'}
              svgPath={CancelSVGpath}
              title={formsT('searchfield.ClearButtonTitle')}
              onClick={(event) => {
                onClear?.(event);
                setShowClearButton(false);
                inputRef.current?.focus();
              }}
            />
          )}
          <Icon svgPath={FilterSVGpath} className={styles.filterIcon} />
        </div>
      </div>
    </div>
  );
};

RolePickerFilterInput.displayName = 'RolePickerFilterInput';
