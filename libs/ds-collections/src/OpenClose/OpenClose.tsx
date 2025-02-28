import { useState, MouseEvent, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, ChevronDownSVGpath } from '@skatteetaten/ds-icons';

import {
  getOpenCloseIconPositionDefault,
  getOpenCloseUnderlineDefault,
  getOpenCloseVariantDefault,
} from './defaults';
import { OpenCloseProps } from './OpenClose.types';

import styles from './OpenClose.module.scss';

export const OpenClose = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  title,
  titleAs: HeadingTag,
  variant = getOpenCloseVariantDefault(),
  iconPosition = getOpenCloseIconPositionDefault(),
  isExpanded: isExpandedExternal,
  isDefaultExpanded,
  isOnClickOnlyFiredOnOpen,
  showUnderline = getOpenCloseUnderlineDefault(),
  onClick,
  children,
}: OpenCloseProps): JSX.Element => {
  const [isExpandedInternal, setIsExpandedInternal] = useState<boolean>(
    isDefaultExpanded ?? false
  );

  const isExpanded =
    isExpandedExternal !== undefined ? isExpandedExternal : isExpandedInternal;

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

  const iconRightClassName = hasIconRight ? styles.openClose_hasIconRight : '';
  const compactClassName = isCompact ? styles.openClose_compact : '';
  const openCloseClassName =
    `${styles.openClose} ${compactClassName} ${iconRightClassName}`.trim();
  const iconClassName = `${styles.icon} ${styles.icon_active} ${
    isExpanded ? styles.icon_open : styles.icon_closed
  } ${isCompact ? styles.icon_compact : ''}`.trim();
  const titleClassName = `${styles.title} ${
    isCompact ? styles.title_compact : ''
  } ${showUnderline ? styles.title_underline : ''}`.trim();
  const contentClassName = `${styles.content} ${
    isCompact ? styles.content_compact : ''
  } ${hasIconRight ? styles.content_hasIconRight : ''}`.trim();

  return (
    <div className={className}>
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
    </div>
  );
};

OpenClose.displayName = 'OpenClose';

export {
  getOpenCloseIconPositionDefault,
  getOpenCloseUnderlineDefault,
  getOpenCloseVariantDefault,
};
