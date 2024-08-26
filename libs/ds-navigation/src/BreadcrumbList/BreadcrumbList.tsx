import React, {
  JSX,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { VerticalDotsSVGpath } from '@skatteetaten/ds-icons';

import { BreadcrumbListProps } from './BreadcrumbList.types';

import styles from './BreadcrumbList.module.scss';

const ExpandButton = ({ onClick }: { onClick: () => void }): JSX.Element => (
  <div className={styles.expandButton}>
    <IconButton
      title={'Vis mer (tekstlistekatalog)'}
      svgPath={VerticalDotsSVGpath}
      onClick={onClick}
    />
    <span aria-hidden>{'/'}</span>
  </div>
);

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      children,
    },
    ref
  ): JSX.Element => {
    // Hent fra context, eller skal vi bare sette denne rett på list i stedet?
    const shouldCollapse = true;

    // const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [initialScrollWidth, setInitialScrollWidth] = useState<
      number | undefined
    >();
    const [isExpandedByUser, setIsExpandedByUser] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);

    useImperativeHandle(ref, () => listRef?.current as HTMLOListElement);

    useLayoutEffect(() => {
      if (listRef.current && !initialScrollWidth) {
        setInitialScrollWidth(listRef.current.scrollWidth);
      }
    }, [initialScrollWidth]);

    useEffect(() => {
      const handleResize = (): void => {
        if (listRef.current && initialScrollWidth) {
          setIsOverflowing(initialScrollWidth > listRef.current.clientWidth);
        }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [initialScrollWidth]);

    const allChildren = React.Children.toArray(children);
    const collapsedChildren = allChildren.slice(2);

    const displayCollapsed =
      shouldCollapse && isOverflowing && !isExpandedByUser;

    const concatenatedClassNames = `${styles.breadcrumbsList} ${
      displayCollapsed ? styles.breadcrumbsListCollapsed : ''
    } ${
      isExpandedByUser ? styles.breadcrumbsListExpanded : ''
    } ${className}`.trim();

    return (
      <ol
        ref={listRef}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={concatenatedClassNames}
      >
        {displayCollapsed ? (
          <>
            <ExpandButton onClick={() => setIsExpandedByUser(true)} />
            {collapsedChildren}
          </>
        ) : (
          allChildren
        )}
      </ol>
    );
  }
);

BreadcrumbList.displayName = 'BreadcrumbList';
