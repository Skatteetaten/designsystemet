import { Children, JSX, forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { ChipsComponent, ChipsProps } from './Chips.types';
import { ChipsRemovable } from '../ChipsRemovable/ChipsRemovable';
import { ChipsToggle } from '../ChipsToggle/ChipsToggle';

import styles from './Chips.module.scss';

export const Chips = forwardRef<HTMLUListElement, ChipsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      ariaLabel,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassname = `${styles.chipsList} ${className}`.trim();

    return (
      <ul
        ref={ref}
        id={id}
        className={concatenatedClassname}
        lang={lang}
        data-testid={dataTestId}
        aria-label={ariaLabel}
      >
        {Children.toArray(children).map((child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    );
  }
) as ChipsComponent;

Chips.displayName = 'Chips';

Chips.Removable = ChipsRemovable;
Chips.Removable.displayName = 'Chips.Removable';

Chips.Toggle = ChipsToggle;
Chips.Toggle.displayName = 'Chips.Toggle';
