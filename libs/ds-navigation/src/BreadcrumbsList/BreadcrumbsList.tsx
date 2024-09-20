import React, {
  JSX,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { VerticalDotsSVGpath } from '@skatteetaten/ds-icons';

import { BreadcrumbsListProps } from './BreadcrumbsList.types';
import { getBreadcrumbsListShouldCollapseDefault } from './defaults';

import styles from './BreadcrumbsList.module.scss';

export const BreadcrumbsList = forwardRef<
  HTMLOListElement,
  BreadcrumbsListProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      shouldCollapse = getBreadcrumbsListShouldCollapseDefault(),
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    const [renderState, setRenderState] = useState<
      'collapsable' | 'collapsed' | 'expanded'
    >(shouldCollapse ? 'collapsable' : 'expanded');
    const [totalWidth, setTotalWidth] = useState(0);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);

    useImperativeHandle(ref, () => listRef.current as HTMLOListElement);

    useEffect(() => {
      if (document.fonts.status === 'loaded') {
        setFontsLoaded(true);
      } else {
        document.fonts.ready.then(() => {
          setFontsLoaded(true);
        });
      }
    }, []);

    useEffect(() => {
      if (!shouldCollapse) return;
      if (!fontsLoaded) return;

      if (listRef.current) {
        const children = listRef.current.children;
        let width = 0;
        Array.from(children).forEach((child) => {
          width += (child as HTMLElement).offsetWidth;
        });
        setTotalWidth(width);
      }
    }, [fontsLoaded, shouldCollapse]);

    useEffect(() => {
      if (!shouldCollapse) return;

      const handleResize = (): void => {
        if (renderState === 'expanded') return;

        if (listRef.current) {
          if (totalWidth !== 0 && totalWidth > listRef.current.clientWidth) {
            setRenderState('collapsed');
          } else {
            setRenderState('collapsable');
          }
        }
      };

      if (!listRef.current) return;

      handleResize();

      const resizeObserver = new ResizeObserver(handleResize);

      resizeObserver.observe(listRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [renderState, shouldCollapse, totalWidth]);

    const handleExpand = (): void => {
      setRenderState('expanded');
      setTimeout(() => {
        if (listRef.current) {
          const childLinkElements = [...listRef.current.querySelectorAll('a')];
          childLinkElements[0].focus();
        }
      }, 0);
    };

    const childrenAsArray = React.Children.toArray(children);

    console.log('Skal være 598:', totalWidth);

    const concatenatedClassNames = `${styles.breadcrumbsList} ${className}`;

    return (
      <ol
        ref={listRef}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={concatenatedClassNames}
      >
        {['collapsable', 'expanded'].includes(renderState) ||
        childrenAsArray.length <= 3 ? (
          childrenAsArray
        ) : (
          <>
            <li className={styles.expandButtonWrapper}>
              <IconButton
                size={'small'}
                title={t('breadcrumbs.ExpandAltText')}
                svgPath={VerticalDotsSVGpath}
                onClick={handleExpand}
              />
              <span>{'/'}</span>
            </li>
            {childrenAsArray.slice(-2)}
          </>
        )}
      </ol>
    );
  }
);

BreadcrumbsList.displayName = 'BreadcrumbsList';

export { getBreadcrumbsListShouldCollapseDefault };
