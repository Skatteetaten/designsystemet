import {
  forwardRef,
  JSX,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipsRemovableProps } from './ChipsRemovable.types';
import styles from '../Chips/Chips.module.scss';
import { getChipDefaultSize } from '../Chips/defaults';
import { ChipsContext } from '../ChipsContext/ChipsContext';

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
    const { updateFocus } = useContext(ChipsContext);

    const chipRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => chipRef.current as HTMLButtonElement);

    const concatenatedClassName =
      `${styles.chip} ${styles.chip_removable} ${size === 'small' ? styles.chip_small : ''} ${className}`.trim();

    const handleOnClose = (): void => {
      if (chipRef.current) {
        updateFocus?.(chipRef.current);
      }

      onClose?.();
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
        onClick={handleOnClose}
      >
        {children}
        <Icon
          className={styles.icon}
          svgPath={CancelSVGpath}
          size={'small'}
          title={'Fjern filter TODO'}
        />
      </button>
    );
  }
);
ChipsRemovable.displayName = 'ChipsRemovable';
