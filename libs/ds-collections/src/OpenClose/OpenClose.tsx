import { useState, MouseEvent, JSX } from 'react';

import { Icon, ChevronDownSVGpath } from '@skatteetaten/ds-icons';

import { OpenCloseProps } from './OpenClose.types';

import styles from './OpenClose.module.scss';

/**
 * OpenClose
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-openclose--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/openclose/) - Brukerveiledning
 */
export const OpenClose = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  title,
  titleAs: HeadingTag = 'div',
  size = 'large',
  iconPosition = 'left',
  isExpanded: isExpandedExternal = false,
  isDefaultExpanded = false,
  isOnClickOnlyFiredOnOpen = false,
  showUnderline = true,
  keepMounted = false,
  onClick,
  children,
}: OpenCloseProps): JSX.Element => {
  const [isExpandedInternal, setIsExpandedInternal] =
    useState<boolean>(isDefaultExpanded);

  const isExpanded = isExpandedExternal || isExpandedInternal;

  const hasIconRight = iconPosition === 'right';

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (isOnClickOnlyFiredOnOpen) {
      !isExpanded && onClick?.(e);
    } else {
      onClick?.(e);
    }
    setIsExpandedInternal(!isExpanded);
  };

  const iconRightClassName = hasIconRight ? styles.openClose_hasIconRight : '';
  const openCloseClassName = `${styles.openClose} ${iconRightClassName}`.trim();
  const iconClassName = `${styles.icon} ${styles.icon_active} ${
    isExpanded ? styles.icon_open : styles.icon_closed
  }`.trim();
  const titleClassName =
    `${styles.title} ${showUnderline ? styles.title_underline : ''}`.trim();
  const contentClassName =
    `${styles.content} ${hasIconRight ? styles.content_hasIconRight : ''}`.trim();
  const hiddenContentClassName = `${contentClassName} ${
    keepMounted && !isExpanded ? styles.content_hidden : ''
  }`.trim();

  return (
    <div className={`${styles.wrapper} ${className}`.trim()} data-size={size}>
      <HeadingTag className={styles.tag}>
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
            size={size === 'small' ? 'medium' : 'large'}
          />

          <span className={titleClassName}>{title}</span>
        </button>
      </HeadingTag>
      {keepMounted ? (
        <div className={hiddenContentClassName}>{children}</div>
      ) : (
        isExpanded && <div className={contentClassName}>{children}</div>
      )}
    </div>
  );
};

OpenClose.displayName = 'OpenClose';
