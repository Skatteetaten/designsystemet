import {
  JSX,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  IconButton,
  InlineButton,
  InlineButtonProps,
} from '@skatteetaten/ds-buttons';
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

type InlineButtonWithScreenReaderTextProps = Omit<
  InlineButtonProps,
  'children'
> & {
  children: ReactNode;
};

const InlineButtonWithScreenReaderText = InlineButton as (
  props: InlineButtonWithScreenReaderTextProps
) => JSX.Element;

const getScreenReaderText = (
  rowType: ExpandableRowProps['rowType'],
  t: (key: string) => string
): string => {
  if (rowType === 'edit') {
    return t('tablerow.EditButtonScreenReaderText');
  }

  return t('tablerow.ExpandButtonScreenReaderText');
};

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
  rowType,
  expandableContent,
  expandButtonTitle = getTableRowExpandButtonTitleDefault(),
  expandButtonAriaDescribedby,
  expandButtonProps,
  showExpandButtonTitle,
  shouldInsertExpandAreaMarkers,
  isExpanded = getTableRowIsExpandedDefault(),
  isExpandButtonDisabled,
  hideIconButton,
  children,
}: ExpandableRowProps): JSX.Element => {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [shouldShowScreenReaderText, setShouldShowScreenReaderText] =
    useState(false);
  useImperativeHandle(ref, () => ({
    focusButton: (): void => {
      buttonRef?.current?.focus();
    },
    buttonRef,
    rowRef,
  }));

  const [rowLength, setRowLength] = useState<number>(999);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isExpanded.toString();
    }
  }, [isExpanded]);

  useEffect(() => {
    const row = rowRef.current;

    if (!row || !rowType) {
      setShouldShowScreenReaderText(false);
      return;
    }

    const firstRowOfType = row
      .closest('table')
      ?.querySelector<HTMLTableRowElement>(`tr[data-row-type="${rowType}"]`);
    const shouldShow = firstRowOfType === row;

    setShouldShowScreenReaderText((prevState) =>
      prevState === shouldShow ? prevState : shouldShow
    );
  }, [rowType]);

  useEffect(() => {
    if (!isExpanded) return;

    const cells = rowRef.current?.cells;

    if (!cells) return;

    let totalColumns = 0;
    for (let i = 0; i < cells.length; i++) {
      totalColumns += cells[i].colSpan || 1;
    }

    setRowLength(totalColumns);
  }, [rowRef, isExpanded]);

  const cellSizeClassName = context?.size
    ? styles[`buttonCell_${context?.size}`]
    : '';

  const cellVariantClassName =
    context?.variant === 'compact' ? styles.buttonCell_compact : '';

  const expandButtonSizeClassName =
    context?.size === 'extraSmall' ? styles.expandButton_extraSmall : '';

  const expandButtonVariantClassName =
    context?.variant === 'compact' ? styles.expandButton_compact : '';

  const expandButtonScreenReaderText =
    shouldShowScreenReaderText && rowType
      ? getScreenReaderText(rowType, t)
      : undefined;

  return (
    <>
      <tr
        ref={rowRef}
        data-row-type={rowType}
        id={id}
        className={`${isExpanded && !shouldInsertExpandAreaMarkers ? styles.row_noBorder : ''} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        <TableDataCell
          className={`${!showExpandButtonTitle ? styles.buttonCell : ''} ${
            !showExpandButtonTitle
              ? cellSizeClassName || cellVariantClassName
              : ''
          }`.trim()}
        >
          {showExpandButtonTitle ? (
            <InlineButtonWithScreenReaderText
              ref={buttonRef}
              className={`${styles.expandButton} ${expandButtonSizeClassName || expandButtonVariantClassName}`.trim()}
              svgPath={svgPath}
              ariaDescribedby={expandButtonAriaDescribedby}
              disabled={isExpandButtonDisabled}
              onClick={onExpandClick}
              {...expandButtonProps}
            >
              {expandButtonTitle}
              {expandButtonScreenReaderText && (
                <>
                  &nbsp;
                  <span className={styles.srOnly}>
                    {expandButtonScreenReaderText}
                  </span>
                </>
              )}
            </InlineButtonWithScreenReaderText>
          ) : (
            <IconButton
              ref={buttonRef}
              className={hideIconButton ? styles.hideIcon : ''}
              svgPath={svgPath}
              title={`${expandButtonTitle} ${expandButtonScreenReaderText ? expandButtonScreenReaderText : ''}`.trim()}
              size={getIconButtonSize(
                isDesktop,
                context?.variant,
                context?.size
              )}
              ariaDescribedby={expandButtonAriaDescribedby}
              ariaExpanded={iconButtonAriaExpanded}
              disabled={isExpandButtonDisabled}
              onClick={onExpandClick}
              {...expandButtonProps}
            />
          )}
        </TableDataCell>
        {children}
      </tr>

      {isExpanded && !shouldInsertExpandAreaMarkers && (
        <tr className={`${styles.expandedRow} ${className}`.trim()}>
          <td colSpan={rowLength}>
            <div
              className={`${styles.expandableLeftContent} ${
                classNames?.expandedContent ?? ''
              }`.trim()}
            >
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

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isExpanded.toString();
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;

    const cells = rowRef.current?.cells;

    if (!cells) return;

    let totalColumns = 0;
    for (let i = 0; i < cells.length; i++) {
      totalColumns += cells[i].colSpan || 1;
    }

    setRowLength(totalColumns);
  }, [rowRef, isExpanded]);

  const cellSizeClassName = context?.size
    ? styles[`buttonCell_${context?.size}`]
    : '';
  const cellVariantClassName =
    context?.variant === 'compact' ? styles.buttonCell_compact : '';

  const expandButtonSizeClassName =
    context?.size === 'extraSmall' ? styles.expandButton_extraSmall : '';

  const expandButtonVariantClassName =
    context?.variant === 'compact' ? styles.expandButton_compact : '';

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
            !showExpandButtonTitle
              ? cellSizeClassName || cellVariantClassName
              : ''
          }`.trim()}
          alignment={'right'}
        >
          {showExpandButtonTitle ? (
            <InlineButton
              ref={buttonRef}
              className={`${styles.expandButton} ${expandButtonSizeClassName || expandButtonVariantClassName}`.trim()}
              svgPath={svgPath}
              ariaDescribedby={expandButtonAriaDescribedby}
              disabled={isExpandButtonDisabled}
              onClick={onExpandClick}
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
              size={getIconButtonSize(
                isDesktop,
                context?.variant,
                context?.size
              )}
              ariaDescribedby={expandButtonAriaDescribedby}
              ariaExpanded={iconButtonAriaExpanded}
              disabled={isExpandButtonDisabled}
              onClick={onExpandClick}
              {...expandButtonProps}
            />
          )}
        </TableDataCell>
      </tr>

      {isExpanded && !shouldInsertExpandAreaMarkers && (
        <tr className={`${styles.expandedRow} ${className}`.trim()}>
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
