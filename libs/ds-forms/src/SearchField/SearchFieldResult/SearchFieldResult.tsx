import { JSX, useEffect, useImperativeHandle, useRef } from 'react';

import { SearchFieldResultProps } from './SearchFieldResult.types';

import styles from './SearchFieldResult.module.scss';

const SearchFieldResult = ({
  ref,
  className,
  title,
  hasFocus,
  setFocus,
  index,
  onClick,
  children,
}: SearchFieldResultProps): JSX.Element => {
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
      className={`${styles.searchResult} ${className ?? ''}`.trim()}
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
      <div className={styles.searchResultTitle}>{title}</div>
      {children}
    </li>
  );
};

export default SearchFieldResult;
SearchFieldResult.displayName = 'SearchFieldResult';
