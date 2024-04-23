import { MouseEvent, forwardRef, useContext, useState } from 'react';

import { Size, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionItemProps } from './AccordionItem.types';
import { getAccordionSizeDefault } from '../Accordion/defaults';
import { AccordionContext } from '../AccordionContext/AccordionContext';
import styles from '../AccordionItem/AccordionItem.module.scss';

export const AccordionItem = forwardRef<HTMLButtonElement, AccordionItemProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      classNames,
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

    const { size = getAccordionSizeDefault(), iconPosition } =
      useContext(AccordionContext);

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
      onClick?.(e);
      setIsExpandedInternal(!isExpanded);
    };

    const isExpanded =
      isExpandedExternal !== undefined
        ? isExpandedExternal
        : isExpandedInternal;

    const hasChevronLeft = iconPosition === 'left' && !svgPath;

    const shouldIndentContent = iconPosition === 'left' || !!svgPath;

    const iconSize: Size = size === 'small' ? 'medium' : 'large';

    const iconWrapperClassNames = `${styles.iconWrapper} ${
      size !== 'small' ? styles[`iconWrapper_${size}`] : ''
    }`.trim();

    const chevronClassNames = `${styles.icon} ${
      isExpanded ? styles.chevron_open : styles.chevron_closed
      // eslint-disable-next-line sonarjs/no-nested-template-literals
    } ${size !== 'small' ? styles[`chevron_${size}`] : ''}`.trim();

    const headerClassNames = `${styles.header} ${
      hasChevronLeft ? styles.header_iconLeft : ''
    } ${size !== 'small' ? styles[`header_${size}`] : ''} ${
      classNames?.container ?? ''
    }`.trim();

    const titleClassNames = `${styles.title} ${
      size !== 'small' ? styles[`title_${size}`] : ''
    } ${classNames?.title ?? ''}`.trim();

    const subtitleClassNames = `${styles.subtitle} ${
      isExpanded ? styles.subtitle_expanded : ''
    } ${size !== 'small' ? styles[`subtitle_${size}`] : ''} ${
      classNames?.subtitle ?? ''
    }`.trim();

    const contentClassNames = `${styles.content} ${
      size !== 'small' ? styles[`content_${size}`] : ''
    } ${shouldIndentContent ? styles[`content_${size}Indented`] : ''} ${
      classNames?.content ?? ''
    }`.trim();

    const concatenatedClassNames =
      `${styles.accordionItem} ${className}`.trim();

    const Tag = titleAs ?? 'div';

    return (
      <Tag className={concatenatedClassNames}>
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
            <div className={iconWrapperClassNames}>
              <Icon svgPath={svgPath} size={iconSize} className={styles.icon} />
            </div>
          )}

          <div className={styles.titleWrapper}>
            <div className={titleClassNames}>{title}</div>
            {subtitle && <p className={subtitleClassNames}>{subtitle}</p>}
          </div>

          <div className={iconWrapperClassNames}>
            <Icon
              svgPath={ChevronDownSVGpath}
              size={iconSize}
              className={chevronClassNames}
            />
          </div>
        </button>

        {isExpanded && <div className={contentClassNames}>{children}</div>}
      </Tag>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';
