import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

// Define the type for the refs object
interface InputAndButtonRefs {
  headingRef: RefObject<HTMLHeadingElement>;
  buttonRef: RefObject<HTMLButtonElement>;
}

export const Heading = forwardRef<InputAndButtonRefs, HeadingProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      as: Tag,
      level,
      canBeManuallyFocused,
      hasSpacing,
      children,
      // headingRef,
    },
    ref
  ): JSX.Element => {
    const levelClassName = level ? styles[`heading_level${level}`] : '';
    let spacingClassName = '';
    if (hasSpacing) {
      if (level === 1) {
        spacingClassName = styles.heading_hasSpacingMedium;
      } else if (level === 2) {
        spacingClassName = styles.heading_hasSpacingSmallMobileMediumOtherwise;
      } else if (level === 3 || level === 4) {
        spacingClassName = styles.heading_hasSpacingSmall;
      } else if (level === 5) {
        spacingClassName = styles.heading_hasSpacingExtraSmall;
      }
    }
    /*     useImperativeHandle(ref, () => ({
      headingRef,
      buttonRef,
    })) */
    const { headingRef, buttonRef } = ref as unknown as InputAndButtonRefs;
    return (
      <Tag
        ref={headingRef}
        id={id}
        className={`${styles.heading} ${levelClassName} ${spacingClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        tabIndex={canBeManuallyFocused ? -1 : undefined}
      >
        {children}
        <h2>{'h2'}</h2>
        <button ref={buttonRef} type={'button'} id={'buttid'}>
          {'Knappen'}
        </button>
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
