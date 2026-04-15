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

export const TableRowWithIconButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
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
            !showExpandButtonTitle
              ? cellSizeClassName || cellVariantClassName
              : ''
          }`.trim()}
          alignment={buttonPosition}
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
              title={`${expandButtonTitle} ${expandButtonScreenReaderText ?? ''}`.trim()}
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
        {buttonPosition === 'left' && children}
      </tr>

      {isExpanded && !shouldInsertExpandAreaMarkers && (
        <tr className={`${styles.expandedRow} ${className}`.trim()}>
          <td colSpan={rowLength}>
            <div
              className={`${buttonPosition === 'left' ? styles.expandableLeftContent : ''} ${
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
