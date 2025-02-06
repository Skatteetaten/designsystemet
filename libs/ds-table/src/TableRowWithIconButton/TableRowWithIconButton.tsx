import {
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';

import { ExpandableRowProps } from './TableRowWithIconButton.types';
import { getIconButtonSize } from './utils';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableRow } from '../TableRow/TableRow';

import styles from './TableRowWithIconButton.module.scss';

export const RowWithLeftSideExpandButton = forwardRef<
  RowWithExpandButtonHandle,
  ExpandableRowProps
>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      onExpandClick,
      classNames,
      svgPath,
      context,
      iconButtonAriaExpanded,
      expandableContent,
      expandButtonTitle,
      expandButtonAriaDescribedby,
      isDesktop,
      isExpanded,
      isExpandButtonDisabled,
      hideIconButton,
      children,
    },
    ref
  ) => {
    const rowRef = useRef<HTMLTableRowElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusButton: (): void => {
        buttonRef?.current?.focus();
      },
      buttonRef,
      rowRef,
    }));
    const expandableWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          expandableWrapperRef.current?.style?.setProperty(
            'width',
            `${Math.round(entry.contentBoxSize[0].inlineSize ?? 0)}px`
          );
        }
      });
      rowRef.current && observer.observe(rowRef.current);
      return (): void => {
        observer.disconnect();
      };
    }, []);

    const handleClick = (): void => {
      onExpandClick();

      /* pass på at bredden på expandert innhold blir riktig første gang raden åpnes
       * setTimeout stokker om på rekkefølgen slik at expandableWrapper ikke er undefined når vi setter bredden*/
      setTimeout(() => {
        expandableWrapperRef.current?.style?.setProperty(
          'width',
          `${rowRef?.current?.offsetWidth ?? 0}px`
        );
      }, 0);
    };

    return (
      <tr
        ref={rowRef}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
      >
        <TableDataCell
          className={`${styles.buttonCell} ${
            context?.variant === 'compact' ? styles.buttonCell_compact : ''
          } ${isExpanded && hideIconButton ? styles.buttonCell_expanded : ''}`}
        >
          <IconButton
            ref={buttonRef}
            className={hideIconButton ? styles.hideIcon : ''}
            svgPath={svgPath}
            title={expandButtonTitle}
            size={getIconButtonSize(isDesktop, context?.variant)}
            ariaDescribedby={expandButtonAriaDescribedby}
            ariaExpanded={iconButtonAriaExpanded}
            disabled={isExpandButtonDisabled}
            onClick={handleClick}
          />
          {isExpanded && (
            <div
              ref={expandableWrapperRef}
              className={`${styles.expandableContent} ${
                classNames?.expandedContent ?? ''
              }`}
            >
              {expandableContent}
            </div>
          )}
        </TableDataCell>
        {children}
      </tr>
    );
  }
);
RowWithLeftSideExpandButton.displayName = 'TableRow';

export const RowWithRightSideExpandButton = forwardRef<
  RowWithExpandButtonHandle,
  ExpandableRowProps
>(
  (
    {
      id,
      className,
      classNames,
      lang,
      'data-testid': dataTestId,
      context,
      expandButtonTitle,
      expandableContent,
      svgPath,
      expandButtonAriaDescribedby,
      isDesktop,
      isExpanded,
      isExpandButtonDisabled,
      onExpandClick,
      hideIconButton,
      children,
    },
    ref
  ) => {
    const rowRef = useRef<HTMLTableRowElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusButton: (): void => {
        buttonRef?.current?.focus();
      },
      buttonRef,
      rowRef,
    }));
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });
    const [rowLength, setRowLength] = useState<number>(999);

    const isExpandableContentRows = (): boolean => {
      if (Array.isArray(expandableContent)) {
        return !expandableContent?.some(
          (element) => !isValidElement(element) || element.type !== TableRow
        );
      } else {
        return (
          isValidElement(expandableContent) &&
          expandableContent.type === TableRow
        );
      }
    };

    const handleClick = (): void => {
      setRowLength(rowRef?.current?.cells.length ?? 999);
      onExpandClick();
    };

    const shouldInsertExpandAreaMarkers = isExpandableContentRows();

    return (
      <>
        <tr
          ref={rowRef}
          id={id}
          className={`${isExpanded && !shouldInsertExpandAreaMarkers ? styles.row_noBorder : ''} ${className}`}
          lang={lang}
          data-testid={dataTestId}
        >
          {children}
          <TableDataCell
            className={`${styles.buttonCell} ${
              context?.variant === 'compact' ? styles.buttonCell_compact : ''
            }`}
            alignment={'right'}
          >
            <IconButton
              ref={buttonRef}
              className={hideIconButton ? styles.hideIcon : ''}
              svgPath={svgPath}
              title={expandButtonTitle}
              size={getIconButtonSize(isDesktop, context?.variant)}
              ariaDescribedby={expandButtonAriaDescribedby}
              ariaExpanded={isExpanded}
              disabled={isExpandButtonDisabled}
              onClick={handleClick}
            />
          </TableDataCell>
        </tr>
        {isExpanded && !shouldInsertExpandAreaMarkers && (
          <tr className={`${styles.expandedRowRight} ${className}`}>
            <td colSpan={rowLength}>
              <div className={classNames?.expandedContent}>
                {expandableContent}
              </div>
            </td>
          </tr>
        )}
        {isExpanded && shouldInsertExpandAreaMarkers && (
          <>
            <tr className={styles.srOnly} lang={lang} data-testid={dataTestId}>
              <td colSpan={rowLength}>{t('table.ExpandAreaStart')}</td>
            </tr>
            {expandableContent}
            <tr className={styles.srOnly}>
              <td colSpan={rowLength}>{t('table.ExpandAreaEnd')}</td>
            </tr>
          </>
        )}
      </>
    );
  }
);
RowWithRightSideExpandButton.displayName = 'TableRow';
