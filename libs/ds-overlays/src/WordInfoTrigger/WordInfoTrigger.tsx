import { useContext, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { useMergeRefs } from '@floating-ui/react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { BookOpenIcon } from '@skatteetaten/ds-icons';

import { WordInfoTriggerProps } from './WordInfoTrigger.types';
import { PopoverContext } from '../PopoverContext/PopoverContext';

import styles from './WordInfoTrigger.module.scss';

export const WordInfoTrigger = ({
  ref,
  id,
  className,
  lang,
  'data-testid': dataTestId,
  hasIcon = true,
  children,
  onClick,
}: WordInfoTriggerProps): JSX.Element => {
  const { floatingData, setIsOpen, isOpen } = useContext(PopoverContext);
  const { setReference } = floatingData.refs;
  const mergedRef = useMergeRefs([setReference, ref]);

  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });

  return (
    <button
      ref={mergedRef}
      id={id}
      className={`${styles.wordInfoTrigger} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      aria-expanded={isOpen}
      onClick={(event): void => {
        onClick?.(event);
        setIsOpen(!isOpen);
      }}
    >
      {children}
      <span className={styles.srOnly}>
        &nbsp;{t('wordinfo.WordExplanation')}
      </span>
      {hasIcon && <BookOpenIcon className={styles.icon} />}
    </button>
  );
};

WordInfoTrigger.displayName = 'WordInfoTrigger';
