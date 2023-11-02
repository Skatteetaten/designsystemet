import { forwardRef } from 'react';

import symbolLogo from './logo-symbol.png';
import { BaseProps } from '../base-props.types';
import { getCommonClassNameDefault } from '../defaults';

import styles from './SymbolLogo.module.scss';

export const SymbolLogo = forwardRef<HTMLImageElement, BaseProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
    },
    ref
  ): JSX.Element => {
    return (
      <img
        ref={ref}
        id={id}
        className={`${styles.logo} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        src={symbolLogo}
        alt={'Logo Skatteetaten'}
      />
    );
  }
);

SymbolLogo.displayName = 'SymbolLogo';
