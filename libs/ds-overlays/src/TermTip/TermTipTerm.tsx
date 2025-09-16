import { useContext, JSX } from 'react';

import { useMergeRefs } from '@floating-ui/react';

import { BookOpenIcon } from '@skatteetaten/ds-icons';

import { TermTipTermProps } from './TermTipTerm.types';
import { PopoverContext } from '../PopoverContext/PopoverContext';

import styles from './TermTip.module.scss';

export const TermTipTerm = ({
  ref,
  id,
  className,
  lang,
  'data-testid': dataTestId,
  hasIcon,
  children,
  onClick,
}: TermTipTermProps): JSX.Element => {
  const { floatingData, setIsOpen, isOpen } = useContext(PopoverContext);
  const { setReference } = floatingData.refs;
  const mergedRef = useMergeRefs([setReference, ref]);

  return (
    <button
      ref={mergedRef}
      id={id}
      className={`${styles.termTipTerm} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      title={'Ordforklaring'}
      aria-expanded={isOpen}
      onClick={(event): void => {
        onClick?.(event);
        setIsOpen(!isOpen);
      }}
    >
      {children}
      {hasIcon && <BookOpenIcon className={styles.icon} />}
    </button>
  );
};

TermTipTerm.displayName = 'TermTipTerm';
