import { Children, JSX, forwardRef, useImperativeHandle, useRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { ChipsComponent, ChipsProps } from './Chips.types';
import { ChipsContext } from '../ChipsContext/ChipsContext';
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
    const listRef = useRef<HTMLUListElement>(null);
    const noFiltersRef = useRef<HTMLSpanElement>(null);

    useImperativeHandle(ref, () => listRef.current as HTMLUListElement);

    const updateFocus = (removedChip: HTMLButtonElement): void => {
      if (!listRef.current || !removedChip.parentElement) return;

      const listItemsArray = Array.from(listRef.current.children);

      if (listItemsArray.length === 1) {
        // fjerner siste chip, sett fokus til skjult tekst
        setTimeout(() => noFiltersRef.current?.focus(), 0);
        return;
      }

      const indexOfRemovedChip = listItemsArray.indexOf(
        removedChip.parentElement
      );

      const indexToFocus =
        indexOfRemovedChip === listItemsArray.length - 1
          ? listItemsArray.length - 2
          : indexOfRemovedChip;

      setTimeout(() => {
        listItemsArray[indexToFocus]?.querySelector('button')?.focus();
      }, 0);
    };

    const concatenatedClassname = `${styles.chipsList} ${className}`.trim();

    const childrenAsArray = Children.toArray(children);

    return (
      <ChipsContext.Provider value={{ updateFocus }}>
        <ul
          ref={listRef}
          id={id}
          className={concatenatedClassname}
          lang={lang}
          data-testid={dataTestId}
          aria-label={ariaLabel}
        >
          {childrenAsArray.map((child, index) => {
            return <li key={index}>{child}</li>;
          })}
          {childrenAsArray.length === 0 ? (
            <span ref={noFiltersRef} className={styles.srOnly} tabIndex={-1}>
              {'Ingen flere filtre'}
            </span>
          ) : null}
        </ul>
      </ChipsContext.Provider>
    );
  }
) as ChipsComponent;

Chips.displayName = 'Chips';

Chips.Removable = ChipsRemovable;
Chips.Removable.displayName = 'Chips.Removable';

Chips.Toggle = ChipsToggle;
Chips.Toggle.displayName = 'Chips.Toggle';
