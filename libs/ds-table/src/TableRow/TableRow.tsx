import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';

import { TableRowProps } from './TableRow.types';
import { getTableRowExpandButtonPositionDefault } from '../Table/defaults';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableContext } from '../TableContext/TableContext';
import {
  RowWithLeftSideExpandButton,
  RowWithRightSideExpandButton,
} from '../TableRowWithIconButton/TableRowWithIconButton';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      expandButtonTitle,
      expandButtonPosition = getTableRowExpandButtonPositionDefault(),
      expandableContent,
      expandButtonAriaDescribedby,
      isExpandable,
      isExpanded: isExpandedExternal,
      onExpand,
      onClose,
      children,
    },
    ref
  ) => {
    const testRef = useRef<RowWithExpandButtonHandle>(null);
    const rowRef = useRef<HTMLTableRowElement>(null);
    useImperativeHandle(
      ref,
      () => testRef?.current?.rowRef?.current as HTMLTableRowElement
    );

    const [isExpandedInternal, setIsExpandedInternal] = useState(false);
    const context = useContext(TableContext);
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });
    const isDesktop = useMediaQuery('(min-width: 1024px)');

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
      setIsExpandedInternal(!isExpandedInternal);
    };

    const buttonTitle = expandButtonTitle ?? t('tablerow.Expandable');

    const svgPath = isExpanded ? ChevronUpSVGpath : ChevronDownSVGpath;
    const isExpandButtonDisabled = false;

    const expandableRowProps = {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      rowRef,
      context,
      expandButtonTitle: buttonTitle,
      expandableContent,
      t,
      svgPath,
      expandButtonAriaDescribedby,
      isDesktop,
      isExpanded,
      iconButtonAriaExpanded: isExpanded,
      isExpandButtonDisabled,
      onExpandClick,
      children,
    };

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
    }
    if (expandButtonPosition === 'left') {
      return (
        <RowWithLeftSideExpandButton ref={testRef} {...expandableRowProps} />
      );
    }
    return (
      <RowWithRightSideExpandButton ref={testRef} {...expandableRowProps} />
    );
  }
);

TableRow.displayName = 'TableRow';
