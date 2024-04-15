import { forwardRef, useState, MouseEvent } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionItemProps } from './AccordionItem.types';

import styles from './AccordionItem.module.scss';

export const AccordionItem = forwardRef<HTMLButtonElement, AccordionItemProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      title,
      subtitle,
      titleAs,
      isExpanded: isExpandedExternal,
      svgPath,
      onClick,
      children,
    },
    ref
  ) => {
    const [isExpandedInternal, setIsExpandedInternal] =
      useState<boolean>(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
      onClick?.(e);
      setIsExpandedInternal(!isExpanded);
    };

    const isExpanded =
      isExpandedExternal !== undefined
        ? isExpandedExternal
        : isExpandedInternal;

    const iconClassName = `${styles.icon} ${styles.icon_active}`;
    const animatedIconClassName = `${iconClassName}} ${
      isExpanded ? styles.icon_open : styles.icon_closed
    }`;

    const headerClassNames = `${styles.header} ${
      svgPath ? styles.header_hasChevronLeft : ''
    }`;

    const classNames = `${styles.accordionItem} ${className}`;

    const Tag = titleAs ?? 'div';

    return (
      <Tag className={classNames}>
        <button
          ref={ref}
          id={id}
          className={headerClassNames}
          lang={lang}
          data-testid={dataTestId}
          aria-expanded={isExpanded}
          type={'button'}
          onClick={handleClick}
        >
          {svgPath && (
            <div className={styles.iconWrapper}>
              <Icon svgPath={svgPath} className={iconClassName} />
            </div>
          )}

          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <div className={styles.iconWrapper}>
            <Icon
              svgPath={ChevronDownSVGpath}
              className={animatedIconClassName}
            />
          </div>
        </button>

        {isExpanded && <div className={styles.content}>{children}</div>}
      </Tag>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';
