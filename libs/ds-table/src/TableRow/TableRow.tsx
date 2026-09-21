import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  JSX,
  ReactNode,
  isValidElement,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';

import { TableRowProps } from './TableRow.types';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableContext } from '../Table/TableContext';
import { TableRowWithIconButton } from '../TableRowWithIconButton/TableRowWithIconButton';

const isExpandableContentRows = (expandableContent: ReactNode): boolean => {
  if (Array.isArray(expandableContent)) {
    return !expandableContent?.some(
      (element) => !isValidElement(element) || element.type !== TableRow
    );
  } else {
    return (
      isValidElement(expandableContent) && expandableContent.type === TableRow
    );
  }
};

export const TableRow = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  expandButtonTitle,
  expandButtonPosition = 'left',
  expandButtonProps,
  expandableContent,
  expandButtonAriaDescribedby,
  showExpandButtonTitle = false,
  isExpandable = false,
  isExpanded: isExpandedExternal = false,
  onExpand,
  onClose,
  children,
}: TableRowProps): JSX.Element => {
  const testRef = useRef<RowWithExpandButtonHandle>(null);
  useImperativeHandle(
    ref,
    () => testRef.current?.rowRef?.current as HTMLTableRowElement
  );

  const [isExpandedInternal, setIsExpandedInternal] =
    useState(isExpandedExternal);
  const context = useContext(TableContext);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });

  useEffect(() => {
    setIsExpandedInternal(false);
  }, [context?.sortState]);

  const onExpandClick = (): void => {
    if (isExpandedInternal) {
      onClose?.();
    } else {
      onExpand?.();
    }
    setIsExpandedInternal((prevState) => !prevState);
  };

  const getButtonTitle = (): string =>
    expandButtonTitle ||
    (showExpandButtonTitle
      ? t('tablerow.ExpandText')
      : t('tablerow.Expandable'));

  if (!isExpandable) {
    return (
      <tr
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
      >
        {children}
      </tr>
    );
  } else {
    return (
      <TableRowWithIconButton
        ref={testRef}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        buttonPosition={expandButtonPosition}
        isExpanded={isExpandedInternal}
        iconButtonAriaExpanded={isExpandedInternal}
        rowType={'expand'}
        expandButtonTitle={getButtonTitle()}
        expandButtonAriaDescribedby={expandButtonAriaDescribedby}
        expandableContent={expandableContent}
        expandButtonProps={expandButtonProps}
        showExpandButtonTitle={showExpandButtonTitle}
        shouldInsertExpandAreaMarkers={isExpandableContentRows(
          expandableContent
        )}
        context={context}
        svgPath={isExpandedInternal ? ChevronUpSVGpath : ChevronDownSVGpath}
        onExpandClick={onExpandClick}
      >
        {children}
      </TableRowWithIconButton>
    );
  }
};

TableRow.displayName = 'TableRow';
