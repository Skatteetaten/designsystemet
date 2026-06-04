import { MouseEvent, useContext, useState, JSX } from 'react';

import { Size } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionContext } from '../AccordionContext';
import { AccordionItemProps } from './AccordionItem.types';

import styles from './AccordionItem.module.scss';

export const AccordionItem = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  classNames,
  title,
  subtitle,
  titleAs: Tag = 'div',
  isDefaultExpanded = false,
  isExpanded: isExpandedExternal = false,
  keepMounted = true,
  svgPath,
  onClick,
  children,
}: AccordionItemProps): JSX.Element => {
  const [isExpandedInternal, setIsExpandedInternal] =
    useState<boolean>(isDefaultExpanded);

  const { size = 'medium', iconPosition } = useContext(AccordionContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(e);
    setIsExpandedInternal(!isExpanded);
  };

  const isExpanded = isExpandedExternal || isExpandedInternal;

  const shouldDisplayCustomIcon = iconPosition === 'right' && !!svgPath;

  const shouldIndentContent =
    iconPosition === 'left' || shouldDisplayCustomIcon;

  const iconSize: Size = size === 'small' ? 'medium' : 'large';

  const iconWrapperClassNames = `${styles.iconWrapper} ${
    size !== 'small' ? styles[`iconWrapper_${size}`] : ''
  }`.trim();

  const chevronClassNames = `${styles.icon} ${
    size !== 'small' ? styles[`chevron_${size}`] : ''
  } ${isExpanded ? styles.chevron_open : styles.chevron_closed} `.trim();

  const headerClassNames = `${styles.header} ${
    iconPosition === 'left' ? styles.header_iconLeft : ''
  } ${size !== 'small' ? styles[`header_${size}`] : ''} ${className} ${
    classNames?.container ?? ''
  }`.trim();

  const titleClassNames = `${styles.title} ${
    size !== 'small' ? styles[`title_${size}`] : ''
  } ${classNames?.title ?? ''}`.trim();

  const subtitleClassNames = `${styles.subtitle} ${
    classNames?.subtitle ?? ''
  }`.trim();

  const contentClassNames = `${styles.content} ${
    size !== 'small' ? styles[`content_${size}`] : ''
  } ${shouldIndentContent ? styles[`content_${size}Indented`] : ''} ${
    classNames?.content ?? ''
  }`.trim();

  return (
    <div className={styles.accordionItem}>
      <Tag className={styles.tag}>
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
          {svgPath && iconPosition !== 'left' && (
            <span className={iconWrapperClassNames}>
              <Icon svgPath={svgPath} size={iconSize} className={styles.icon} />
            </span>
          )}

          <span className={styles.titleWrapper}>
            <span className={titleClassNames}>{title}</span>
            {subtitle && <span className={subtitleClassNames}>{subtitle}</span>}
          </span>

          <span className={iconWrapperClassNames}>
            <Icon
              svgPath={ChevronDownSVGpath}
              size={iconSize}
              className={chevronClassNames}
            />
          </span>
        </button>
      </Tag>
      {keepMounted ? (
        <div
          className={isExpanded ? contentClassNames : styles.content_collapsed}
        >
          {children}
        </div>
      ) : (
        isExpanded && <div className={contentClassNames}>{children}</div>
      )}
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';
