import React, {
  forwardRef,
  JSX,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { SearchFieldResultProps } from './SearchFieldResult.types';

import styles from './SearchFieldResult.module.scss';

const SearchFieldResult = forwardRef<HTMLLIElement, SearchFieldResultProps>(
  (
    { title, hasFocus, setFocus, index, onClick, children },
    ref
  ): JSX.Element => {
    const liRef = useRef<HTMLLIElement>(null);
    useImperativeHandle(ref, () => liRef?.current as HTMLLIElement);

    useEffect(() => {
      if (hasFocus) {
        liRef.current?.focus();
      }
    }, [hasFocus]);

    return (
      <li
        ref={liRef}
        className={styles.searchResult}
        tabIndex={hasFocus ? 0 : -1}
        role={'option'}
        aria-selected={hasFocus}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick?.();
          }
        }}
        onClick={() => {
          setFocus(index);
          onClick?.();
        }}
      >
        <span className={styles.searchResultTitle}>{title}</span>
        {children}
      </li>
    );
  }
);

export default SearchFieldResult;
SearchFieldResult.displayName = 'SearchFieldResult';
