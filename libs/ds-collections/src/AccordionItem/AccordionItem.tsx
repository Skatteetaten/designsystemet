import { MouseEvent, forwardRef, useState } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionItemProps } from './AccordionItem.types';
import styles from '../Accordion/Accordion.module.scss';

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

    const iconClassName = `${styles.icon} ${
      isExpanded ? styles.icon_open : styles.icon_closed
    }`;

    const headerClassName = `${styles.header} ${
      svgPath ? styles.header_withCustomIcon : ''
    }`.trim();

    const subtitleClassName = `${styles.subtitle} ${
      isExpanded ? styles.subtitle_expanded : ''
    }`;

    const classNames = `${styles.accordionItem} ${className}`;

    const Tag = titleAs ?? 'div';
    // Legg spacing på subtitlen
    return (
      <Tag className={classNames}>
        <button
          ref={ref}
          id={id}
          className={headerClassName}
          lang={lang}
          data-testid={dataTestId}
          aria-expanded={isExpanded}
          type={'button'}
          onClick={handleClick}
        >
          {svgPath && (
            <div className={styles.iconWrapper}>
              <Icon svgPath={svgPath} className={styles.icon} />
            </div>
          )}

          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
            {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
          </div>

          <div className={styles.iconWrapper}>
            <Icon svgPath={ChevronDownSVGpath} className={iconClassName} />
          </div>
        </button>

        {isExpanded && <div className={styles.content}>{children}</div>}
      </Tag>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';
