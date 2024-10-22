import { forwardRef, JSX, useImperativeHandle, useRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipsRemovableProps } from './ChipsRemovable.types';
import styles from '../Chips/Chips.module.scss';
import { getChipDefaultSize } from '../Chips/defaults';

export const ChipsRemovable = forwardRef<
  HTMLButtonElement,
  ChipsRemovableProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      size = getChipDefaultSize(),
      disabled,
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const chipRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => chipRef.current as HTMLButtonElement);

    const concatenatedClassName =
      `${styles.chip} ${styles.chip_removable} ${size === 'small' ? styles.chip_small : ''} ${className}`.trim();

    const getSibling = (): HTMLButtonElement | null => {
      return (
        (chipRef.current?.parentElement?.previousElementSibling?.querySelector(
          'button'
        ) ??
          chipRef.current?.parentElement?.nextElementSibling?.querySelector(
            'button'
          )) ||
        null
      );
    };

    return (
      <button
        ref={chipRef}
        type={'button'}
        disabled={disabled}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        onClick={() => {
          getSibling()?.focus();
          // TODO: dersom første element fjernes, må vi også kunne fokusere neste. Dette fungerer ikke nå.
          onClose?.();
        }}
      >
        {children}
        <Icon
          className={styles.icon}
          svgPath={CancelSVGpath}
          size={'small'}
          title={'TODO: legg inn tittel'}
        />
      </button>
    );
  }
);
ChipsRemovable.displayName = 'ChipsRemovable';
