import { MouseEvent, useContext, useState, JSX } from 'react';

import { Size, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { AccordionContext } from '../AccordionContext';
import { AccordionItemProps } from './AccordionItem.types';
import { getAccordionItemKeepMountedDefault } from './defaults';
import { getAccordionSizeDefault } from '../defaults';

import styles from './AccordionItem.module.scss';

export const AccordionItem = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  classNames,
  title,
  subtitle,
  titleAs,
  isDefaultExpanded,
  isExpanded: isExpandedExternal,
  keepMounted = getAccordionItemKeepMountedDefault(),
  svgPath,
  onClick,
  children,
}: AccordionItemProps): JSX.Element => {
  const [isExpandedInternal, setIsExpandedInternal] = useState<boolean>(
    isDefaultExpanded ?? false
  );

  const { size = getAccordionSizeDefault(), iconPosition } =
    useContext(AccordionContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(e);
    setIsExpandedInternal(!isExpanded);
  };

  const isExpanded =
    isExpandedExternal !== undefined ? isExpandedExternal : isExpandedInternal;

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

  const Tag = titleAs ?? 'div';

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
