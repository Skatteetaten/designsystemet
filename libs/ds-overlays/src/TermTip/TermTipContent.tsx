import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TermTipContentProps } from './TermTipContent.types';
import { PopoverContent } from '../PopoverContent/PopoverContent';

import styles from './TermTip.module.scss';

export const TermTipContent = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: TermTipContentProps): JSX.Element | null => {
  return (
    <PopoverContent
      ref={ref}
      id={id}
      className={`${styles.termTipContent} ${className.trim()}`}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </PopoverContent>
  );
};

TermTipContent.displayName = 'TermTipContent';
