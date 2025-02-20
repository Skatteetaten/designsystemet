import {
  forwardRef,
  JSX,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipsRemovableProps } from './ChipsRemovable.types';
import { getChipDefaultSize } from '../Chips/defaults';
import { ChipsContext } from '../ChipsContext/ChipsContext';

import styles from './ChipsRemovable.module.scss';

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
    const { t } = useTranslation('ds_collections', { i18n: dsI18n });
    const { updateFocus } = useContext(ChipsContext);

    const chipRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => chipRef.current as HTMLButtonElement);

    const concatenatedClassName =
      `${styles.removableChip} ${size === 'small' ? styles.removableChip_small : ''} ${className ?? ''}`.trim();

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
          title={t('chips.RemoveFilter')}
        />
      </button>
    );
  }
);
ChipsRemovable.displayName = 'ChipsRemovable';
