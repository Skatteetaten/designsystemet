import React, { JSX, useImperativeHandle, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { HorizontalDotsSVGpath } from '@skatteetaten/ds-icons';

import { BreadcrumbsListProps } from './BreadcrumbsList.types';
import {
  getBreadcrumbsListShouldCollapseDefault,
  getBreadcrumbsListShowLastItemAsCurrentPageDefault,
} from './defaults';
import { BreadcrumbsListContext } from '../BreadcrumbsListContext/BreadcrumbsListContext';

import styles from './BreadcrumbsList.module.scss';

export const BreadcrumbsList = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  shouldCollapse = getBreadcrumbsListShouldCollapseDefault(),
  showLastItemAsCurrentPage = getBreadcrumbsListShowLastItemAsCurrentPageDefault(),
  children,
}: BreadcrumbsListProps): JSX.Element => {
  const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = !useMediaQuery('(min-width: 640px)');

  const isCollapsed = shouldCollapse && !isExpanded && isMobile;

  useImperativeHandle(ref, () => listRef.current as HTMLOListElement);
  const listRef = useRef<HTMLOListElement>(null);

  const handleExpand = (): void => {
    setIsExpanded(true);
    setTimeout(() => {
      if (listRef.current) {
        const childLinkElements = [...listRef.current.querySelectorAll('a')];
        childLinkElements[0].focus();
      }
    }, 0);
  };

  const childrenAsArray = React.Children.toArray(children);

  const concatenatedClassNames =
    `${styles.breadcrumbsList} ${className}`.trim();

  return (
    <BreadcrumbsListContext.Provider
      value={{ showLastItemAsCurrentPage, itemCount: childrenAsArray.length }}
    >
      <ol
        ref={listRef}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={concatenatedClassNames}
      >
        {!isCollapsed || childrenAsArray.length <= 3 ? (
          childrenAsArray
        ) : (
          <>
            <li className={styles.expandButtonWrapper}>
              <IconButton
                size={'small'}
                title={t('breadcrumbs.ExpandAltText')}
                svgPath={HorizontalDotsSVGpath}
                onClick={handleExpand}
              />
              <span aria-hidden={'true'}>{'/'}</span>
            </li>
            {childrenAsArray.slice(-2)}
          </>
        )}
      </ol>
    </BreadcrumbsListContext.Provider>
  );
};

BreadcrumbsList.displayName = 'BreadcrumbsList';

export {
  getBreadcrumbsListShouldCollapseDefault,
  getBreadcrumbsListShowLastItemAsCurrentPageDefault,
};
