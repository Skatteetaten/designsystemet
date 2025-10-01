import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { WordInfoContentProps } from './WordInfoContent.types';
import { PopoverContent } from '../PopoverContent/PopoverContent';

import styles from './WordInfoContent.module.scss';

export const WordInfoContent = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: WordInfoContentProps): JSX.Element | null => {
  return (
    <PopoverContent
      ref={ref}
      id={id}
      className={`${styles.wordInfoContent} ${className.trim()}`}
      classNames={{
        contentWrapper: styles.contentWrapper,
        closeButton: styles.closeButton,
      }}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </PopoverContent>
  );
};

WordInfoContent.displayName = 'WordInfoContent';
