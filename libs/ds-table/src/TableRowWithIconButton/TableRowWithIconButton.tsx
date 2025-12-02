import { JSX, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton, InlineButton } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';

import { ExpandableRowProps } from './TableRowWithIconButton.types';
import { getIconButtonSize } from './utils';
import {
  getTableRowExpandButtonTitleDefault,
  getTableRowIsExpandedDefault,
} from '../Table/defaults';
import { TableDataCell } from '../TableDataCell/TableDataCell';

import styles from './TableRowWithIconButton.module.scss';

export const RowWithLeftSideExpandButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  onExpandClick,
  classNames,
  svgPath,
  context,
  iconButtonAriaExpanded,
  expandableContent,
  expandButtonTitle = getTableRowExpandButtonTitleDefault(),
  expandButtonAriaDescribedby,
  expandButtonProps,
  showExpandButtonTitle,
  isExpanded = getTableRowIsExpandedDefault(),
  isExpandButtonDisabled,
  hideIconButton,
  children,
}: ExpandableRowProps): JSX.Element => {
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
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const cellRef = useRef<HTMLTableCellElement | null>(null);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const boundingRects = cellRef.current?.getBoundingClientRect();
    cellRef.current?.style.setProperty(
      'max-width',
      `${boundingRects?.width}px`
    );

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const currentWidth =
          expandableWrapperRef?.current?.getBoundingClientRect().width;
        const targetWidth = Math.round(entry.contentBoxSize[0].inlineSize ?? 0);
        if (currentWidth === targetWidth) {
          continue;
        }
        expandableWrapperRef.current?.style?.setProperty(
          'width',
          `${targetWidth}px`
        );
      }
    });
    rowRef.current && observer.observe(rowRef.current);
    return (): void => {
      observer.disconnect();
    };
  }, [isExpanded]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isExpanded.toString();
    }
  }, [isExpanded]);

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
        ref={cellRef}
        className={`${!showExpandButtonTitle ? styles.buttonCell : ''} ${
          context?.variant === 'compact' && !showExpandButtonTitle
            ? styles.buttonCell_compact
            : ''
        } ${isExpanded && hideIconButton ? styles.buttonCell_expanded : ''}`.trim()}
      >
        {showExpandButtonTitle ? (
          <InlineButton
            ref={buttonRef}
            className={`${styles.expandButton} ${context?.variant === 'compact' ? styles.expandButton_compact : ''}`.trim()}
            svgPath={svgPath}
            ariaDescribedby={expandButtonAriaDescribedby}
            disabled={isExpandButtonDisabled}
            onClick={handleClick}
            {...expandButtonProps}
          >
            {expandButtonTitle}
          </InlineButton>
        ) : (
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
            {...expandButtonProps}
          />
        )}
        {isExpanded && (
          <div
            ref={expandableWrapperRef}
            className={`${styles.expandableContent} ${context?.variant === 'compact' ? styles.expandableContent_compact : ''} ${
              classNames?.expandedContent ?? ''
            }`.trim()}
          >
            {expandableContent}
          </div>
        )}
      </TableDataCell>
      {children}
    </tr>
  );
};
RowWithLeftSideExpandButton.displayName = 'TableRow';

export const RowWithRightSideExpandButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  context,
  expandButtonTitle = getTableRowExpandButtonTitleDefault(),
  expandableContent,
  showExpandButtonTitle,
  iconButtonAriaExpanded,
  svgPath,
  expandButtonAriaDescribedby,
  expandButtonProps,
  isExpanded = getTableRowIsExpandedDefault(),
  isExpandButtonDisabled,
  shouldInsertExpandAreaMarkers,
  onExpandClick,
  hideIconButton,
  children,
}: ExpandableRowProps): JSX.Element => {
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
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleClick = (): void => {
    onExpandClick();
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isExpanded.toString();
    }
  }, [isExpanded]);

  useEffect(() => {
    setRowLength(rowRef?.current?.cells.length ?? 999);
  }, [rowRef]);

  return (
    <>
      <tr
        ref={rowRef}
        id={id}
        className={`${isExpanded && !shouldInsertExpandAreaMarkers ? styles.row_noBorder : ''} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        {children}
        <TableDataCell
          className={`${!showExpandButtonTitle ? styles.buttonCell : ''} ${
            context?.variant === 'compact' && !showExpandButtonTitle
              ? styles.buttonCell_compact
              : ''
          }`.trim()}
          alignment={'right'}
        >
          {showExpandButtonTitle ? (
            <InlineButton
              ref={buttonRef}
              className={`${styles.expandButton} ${context?.variant === 'compact' ? styles.expandButton_compact : ''}`.trim()}
              svgPath={svgPath}
              ariaDescribedby={expandButtonAriaDescribedby}
              disabled={isExpandButtonDisabled}
              onClick={handleClick}
              {...expandButtonProps}
            >
              {expandButtonTitle}
            </InlineButton>
          ) : (
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
              {...expandButtonProps}
            />
          )}
        </TableDataCell>
      </tr>
      {isExpanded && !shouldInsertExpandAreaMarkers && (
        <tr className={`${styles.expandedRowRight} ${className}`.trim()}>
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
};
RowWithRightSideExpandButton.displayName = 'TableRow';
