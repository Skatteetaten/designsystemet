import { JSX, useEffect, useId, useRef, useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { CancelSVGpath, FilterSVGpath, Icon } from '@skatteetaten/ds-icons';

import styles from './navigation-filter.module.scss';

interface NavigationFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const NavigationFilter = ({
  value,
  onChange,
}: NavigationFilterProps): JSX.Element => {
  const inputId = useId();
  const descriptionId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [liveRegionContent, setLiveRegionContent] = useState('');

  useEffect(() => {
    setLiveRegionContent('');
    const timeoutId = setTimeout(() => {
      setLiveRegionContent('Søkeresultatene er oppdatert.');
    }, 100);

    return (): void => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${styles.srOnly}`} htmlFor={inputId}>
        {'Søk i meny'}
      </label>
      <div className={styles.srOnly} id={descriptionId}>
        {'Listen oppdateres mens du skriver.'}
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
          id={inputId}
          aria-describedby={descriptionId}
          className={styles.input}
          name={'navigation-filter'}
          placeholder={'Søk i meny'}
          type={'search'}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {value ? (
          <IconButton
            className={styles.clearButton}
            size={'small'}
            svgPath={CancelSVGpath}
            title={'Nullstill filter'}
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
          />
        ) : null}
        <Icon svgPath={FilterSVGpath} className={styles.filterIcon} />
      </div>
    </div>
  );
};
