import { JSX } from 'react';

import { CardActionsProps } from './CardActions.types';

import styles from './CardActions.module.scss';

export const CardActions = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  children,
}: CardActionsProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.cardActions} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

CardActions.displayName = 'CardActions';
