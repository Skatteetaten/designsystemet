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

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';

import { TableRowProps } from './TableRow.types';
import {
  getTableRowExpandButtonPositionDefault,
  getTableRowExpandButtonTitleDefault,
} from '../Table/defaults';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableContext } from '../Table/TableContext';
import {
  RowWithLeftSideExpandButton,
  RowWithRightSideExpandButton,
} from '../TableRowWithIconButton/TableRowWithIconButton';

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
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  expandButtonTitle,
  expandButtonPosition = getTableRowExpandButtonPositionDefault(),
  expandButtonProps,
  expandableContent,
  expandButtonAriaDescribedby,
  showExpandButtonTitle,
  isExpandable,
  isExpanded: isExpandedExternal,
  onExpand,
  onClose,
  children,
}: TableRowProps): JSX.Element => {
  const testRef = useRef<RowWithExpandButtonHandle>(null);
  useImperativeHandle(
    ref,
    () => testRef.current?.rowRef?.current as HTMLTableRowElement
  );

  const [isExpandedInternal, setIsExpandedInternal] = useState(false);
  const context = useContext(TableContext);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });

  const isExpanded = isExpandedExternal ?? isExpandedInternal;

  useEffect(() => {
    setIsExpandedInternal(false);
  }, [context?.sortState]);

  const onExpandClick = (): void => {
    if (isExpanded) {
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
      : getTableRowExpandButtonTitleDefault());

  const Tag =
    expandButtonPosition === 'left'
      ? RowWithLeftSideExpandButton
      : RowWithRightSideExpandButton;

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
      <Tag
        ref={testRef}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        isExpanded={isExpanded}
        iconButtonAriaExpanded={isExpanded}
        expandButtonTitle={getButtonTitle()}
        expandButtonAriaDescribedby={expandButtonAriaDescribedby}
        expandableContent={expandableContent}
        expandButtonProps={expandButtonProps}
        showExpandButtonTitle={showExpandButtonTitle}
        shouldInsertExpandAreaMarkers={isExpandableContentRows(
          expandableContent
        )}
        context={context}
        svgPath={isExpanded ? ChevronUpSVGpath : ChevronDownSVGpath}
        onExpandClick={onExpandClick}
      >
        {children}
      </Tag>
    );
  }
};

TableRow.displayName = 'TableRow';
