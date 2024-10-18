import { forwardRef, JSX, useState } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CircleRingSVGpath,
  CompletedSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { ChipsToggleProps } from './ChipsToggle.types';
import { getChipsToggleDefaultShowCheckmark } from './defaults';
import styles from '../Chips/Chips.module.scss';

export const ChipsToggle = forwardRef<HTMLButtonElement, ChipsToggleProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      //size = getChipDefaultSize(),
      isSelected: externalIsSelected = false,
      showCheckmark = getChipsToggleDefaultShowCheckmark(),
      children,
    },
    ref
  ): JSX.Element => {
    const [pressed, setPressed] = useState(externalIsSelected);

    const concatenatedClassName =
      `${styles.chip} ${pressed ? styles.chip_selected : ''} ${showCheckmark ? styles.chip_withCheckmark : ''} ${className}`.trim();

    const handlePressed = (): void => {
      setPressed((prevIsPressed) => !prevIsPressed);
    };

    return (
      <button
        ref={ref}
        type={'button'}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        aria-pressed={pressed ? 'true' : 'false'}
        onClick={handlePressed}
      >
        {showCheckmark ? (
          <Icon
            className={styles.icon}
            svgPath={pressed ? CompletedSVGpath : CircleRingSVGpath}
            size={'medium'}
            title={'TODO: legg inn tittel'}
          />
        ) : null}
        {children}
      </button>
    );
  }
);
ChipsToggle.displayName = 'ChipsToggle';

export { getChipsToggleDefaultShowCheckmark };
