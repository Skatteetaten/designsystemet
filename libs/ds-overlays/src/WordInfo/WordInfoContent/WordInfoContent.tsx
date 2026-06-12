import { JSX } from 'react';

import { WordInfoContentProps } from './WordInfoContent.types';
import { PopoverContent } from '../../Popover/PopoverContent/PopoverContent';

import styles from './WordInfoContent.module.scss';

export const WordInfoContent = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  children,
}: WordInfoContentProps): JSX.Element => {
  return (
    <PopoverContent
      ref={ref}
      id={id}
      className={`${styles.wordInfoContent} ${className}`.trim()}
      classNames={{
        contentWrapper: styles.contentWrapper,
        closeButton: styles.closeButton,
      }}
      lang={lang}
      data-testid={dataTestId}
      as={'span'}
    >
      {children}
    </PopoverContent>
  );
};

WordInfoContent.displayName = 'WordInfoContent';
