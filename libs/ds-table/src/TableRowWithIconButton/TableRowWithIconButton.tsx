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
import { dsI18n } from '@skatteetaten/ds-core-utils';

import { ExpandableRowProps } from './TableRowWithIconButton.types';
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

export const TableRowWithIconButton = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  onExpandClick,
  classNames,
  buttonPosition,
  svgPath,
  context,
  iconButtonAriaExpanded,
  rowType,
  expandableContent,
  expandButtonTitle = dsI18n.t('ds_tables:tablerow.Expandable'),
  expandButtonAriaDescribedby,
  expandButtonProps,
  showExpandButtonTitle,
  shouldInsertExpandAreaMarkers,
  isExpanded = false,
  isExpandButtonDisabled,
  hideIconButton,
  children,
}: ExpandableRowProps): JSX.Element => {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });
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

  const expandButtonWithLabelSizeClassName =
    context?.size === 'extraSmall'
      ? styles.expandButtonWithLabel_extraSmall
      : '';

  const expandIconButtonSizeClassName =
    context?.size === 'extraSmall' ? styles.expandIconButton_extraSmall : '';

  const expandButtonScreenReaderText =
    buttonPosition === 'left' && shouldShowScreenReaderText && rowType
      ? getScreenReaderText(rowType, t)
      : undefined;

  return (
    <>
      <tr
        ref={rowRef}
        data-row-type={buttonPosition === 'left' ? rowType : undefined}
        id={id}
        className={`${isExpanded && !shouldInsertExpandAreaMarkers ? styles.row_noBorder : ''} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        {buttonPosition === 'right' && children}
        <TableDataCell
          className={`${!showExpandButtonTitle ? styles.buttonCell : ''} ${
            !showExpandButtonTitle ? cellSizeClassName : ''
          }`.trim()}
          alignment={buttonPosition}
        >
          {showExpandButtonTitle ? (
            <InlineButtonWithScreenReaderText
              ref={buttonRef}
              className={`${styles.expandButtonWithLabel} ${expandButtonWithLabelSizeClassName}`.trim()}
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
              className={`${hideIconButton ? styles.hideIcon : ''} ${expandIconButtonSizeClassName}`.trim()}
              svgPath={svgPath}
              title={`${expandButtonTitle} ${expandButtonScreenReaderText ?? ''}`.trim()}
              size={
                context?.size === 'extraSmall' || context?.size === 'small'
                  ? 'medium'
                  : context?.size
              }
              ariaDescribedby={expandButtonAriaDescribedby}
              ariaExpanded={iconButtonAriaExpanded}
              disabled={isExpandButtonDisabled}
              onClick={onExpandClick}
              {...expandButtonProps}
            />
          )}
        </TableDataCell>
        {buttonPosition === 'left' && children}
      </tr>

      {isExpanded && !shouldInsertExpandAreaMarkers && (
        <tr className={`${styles.expandedRow} ${className}`.trim()}>
          <td colSpan={rowLength}>
            <div
              className={`${styles.expandedContent} ${
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
TableRowWithIconButton.displayName = 'TableRowWithIconButton';
