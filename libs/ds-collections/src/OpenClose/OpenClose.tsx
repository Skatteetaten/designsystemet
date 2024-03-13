import { forwardRef, useState, MouseEvent } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, ChevronDownSVGpath } from '@skatteetaten/ds-icons';

import {
  getOpenCloseIconPositionDefault,
  getOpenCloseShowUnderlineDefault,
  getOpenCloseVariantDefault,
} from './defaults';
import { OpenCloseProps } from './OpenClose.types';

import styles from './OpenClose.module.scss';

export const OpenClose = forwardRef<HTMLButtonElement, OpenCloseProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      title,
      titleAs: HeadingTag,
      variant = getOpenCloseVariantDefault(),
      iconPosition = getOpenCloseIconPositionDefault(),
      isExpanded: isExpandedExternal,
      isOnClickOnlyFiredOnOpen,
      showUnderline = getOpenCloseShowUnderlineDefault(),
      onClick,
      children,
    },
    ref
  ) => {
    const [isExpandedInternal, setIsExpandedInternal] =
      useState<boolean>(false);

    const isExpanded =
      isExpandedExternal !== undefined
        ? isExpandedExternal
        : isExpandedInternal;

    const Tag = HeadingTag ?? 'div';
    const hasIconRight = iconPosition === 'right';
    const isCompact = variant === 'compact';

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
      if (isOnClickOnlyFiredOnOpen) {
        !isExpanded && onClick?.(e);
      } else {
        onClick?.(e);
      }
      setIsExpandedInternal(!isExpanded);
    };

    const iconRightClassName = hasIconRight
      ? styles.openClose_hasIconRight
      : '';
    const compactClassName = isCompact ? styles.openClose_compact : '';
    const openCloseClassName = `${styles.openClose} ${compactClassName} ${iconRightClassName} ${className}`;
    const iconClassName = `${styles.icon} ${styles.icon_active} ${
      isExpanded ? styles.icon_open : styles.icon_closed
    } ${isCompact ? styles.icon_compact : ''}`;
    const titleClassName = `${styles.title} ${
      isCompact ? styles.title_compact : ''
    } ${showUnderline ? styles.title_underline : ''}`;
    const contentClassName = `${styles.content} ${
      isCompact ? styles.content_compact : ''
    } ${hasIconRight ? styles.content_hasIconRight : ''}`;

    return (
      <>
        <Tag className={styles.tag}>
          <button
            ref={ref}
            id={id}
            className={openCloseClassName}
            lang={lang}
            data-testid={dataTestId}
            aria-expanded={isExpanded}
            type={'button'}
            onClick={handleClick}
          >
            <Icon
              svgPath={ChevronDownSVGpath}
              className={iconClassName}
              size={isCompact ? 'medium' : 'large'}
            />

            <span className={titleClassName}>{title}</span>
          </button>
        </Tag>
        {isExpanded && <div className={contentClassName}>{children}</div>}
      </>
    );
  }
);

OpenClose.displayName = 'OpenClose';

export {
  getOpenCloseIconPositionDefault,
  getOpenCloseShowUnderlineDefault,
  getOpenCloseVariantDefault,
};
