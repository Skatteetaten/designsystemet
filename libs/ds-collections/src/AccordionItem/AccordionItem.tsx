import { forwardRef, useState, MouseEvent } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionItemProps } from './AccordionItem.types';
import { getAccordionItemHeadingAsDefault } from './defaults';

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
      titleAs = getAccordionItemHeadingAsDefault(),
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

    const headingClassNames = `${styles.header} ${
      svgPath ? styles.header_hasIconRight : ''
    }`;

    const classNames = `${styles.accordionItem} ${className}`;

    const Tag = titleAs;

    return (
      <div className={classNames}>
        <button
          ref={ref}
          id={id}
          className={headingClassNames}
          lang={lang}
          data-testid={dataTestId}
          aria-expanded={isExpanded}
          type={'button'}
          onClick={handleClick}
        >
          <div className={styles.iconWrapper}>
            <Icon
              svgPath={ChevronDownSVGpath}
              className={animatedIconClassName}
            />
          </div>

          <div className={styles.titleWrapper}>
            <Tag className={styles.title}>{title}</Tag>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {svgPath && (
            <div className={styles.iconWrapper}>
              <Icon svgPath={svgPath} className={iconClassName} />
            </div>
          )}
        </button>

        {isExpanded && <div className={styles.content}>{children}</div>}
      </div>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';

export { getAccordionItemHeadingAsDefault };
