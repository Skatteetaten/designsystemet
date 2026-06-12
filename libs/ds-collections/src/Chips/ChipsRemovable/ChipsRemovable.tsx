import { JSX, useContext, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipsRemovableProps } from './ChipsRemovable.types';
import { ChipsContext } from '../ChipsContext';
import { defaultChipsSize } from '../defaults';

import styles from './ChipsRemovable.module.scss';

export const ChipsRemovable = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  size = defaultChipsSize,
  disabled = false,
  onClose,
  children,
}: ChipsRemovableProps): JSX.Element => {
  const { t } = useTranslation('ds_collections', { i18n: dsI18n });
  const { updateFocus } = useContext(ChipsContext);

  const chipRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => chipRef.current as HTMLButtonElement);

  const concatenatedClassName =
    `${styles.removableChip} ${size === 'small' ? styles.removableChip_small : ''} ${className}`.trim();

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
};
ChipsRemovable.displayName = 'ChipsRemovable';
