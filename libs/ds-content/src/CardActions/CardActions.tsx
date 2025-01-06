import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardActionsProps } from './CardActions.types';

import styles from './CardActions.module.scss';

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      spacing,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        className={`${className} ${styles.cardActions}`}
        lang={lang}
        data-testid={dataTestId}
        data-spacing={spacing}
      >
        {children}
      </div>
    );
  }
);

CardActions.displayName = 'CardActions';
