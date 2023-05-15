import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';
import { TFunction } from 'i18next';

import { RowProps } from './Row.types';
import { DataCell } from '../DataCell/DataCell';
import { getTableRowExpandButtonPositionDefault } from '../Table/defaults';
import { TableContextProps } from '../Table/Table.types';
import { TableContext } from '../Table/TableContext';
import { getIconButtonSize, useMediaQuery } from '../Table/utils';

import styles from './Row.module.scss';

interface ExpandableRowProps {
  rowRef: MutableRefObject<HTMLTableRowElement | null>;
  expandButtonTitle?: string;
  expandedContent: ReactNode;
  context: TableContextProps | null;
  t: TFunction<'ds_tables', undefined, 'ds_tables'>;
  isDesktop: boolean;
  isExpandedInternal?: boolean;
  isExpanded?: boolean;
  onExpandClick: () => void;
  children?: ReactNode;
}

const RowWithLeftSideExpandButton = forwardRef<
  HTMLTableRowElement,
  ExpandableRowProps
>(
  (
    {
      rowRef,
      onExpandClick,
      t,
      context,
      expandedContent,
      isDesktop,
      expandButtonTitle,
      isExpanded,
      children,
    },
    ref
  ) => {
    const expandableWrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      const currentRowRef = rowRef.current;

      const listener = (): void => {
        expandableWrapperRef.current?.style?.setProperty(
          'width',
          `${(currentRowRef?.offsetWidth ?? 0) - 5}px`
        );
      };
      listener();

      window.addEventListener('resize', listener);
      return (): void => window.removeEventListener('resize', listener);
    }, [rowRef]);

    const handleClick = (): void => {
      onExpandClick();

      /* pass på at bredden på expandert innhold blir riktig første gang raden åpnes
       * setTimeout stokker om på rekkefølgen slik at expandableWrapper ikke er undefined når vi setter bredden*/
      setTimeout(() => {
        expandableWrapperRef.current?.style?.setProperty(
          'width',
          `${(rowRef?.current?.offsetWidth ?? 0) - 5}px`
        );
      }, 0);
    };

    return (
      <tr
        ref={(node): void => {
          rowRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={isExpanded ? undefined : styles.row_notExpanded}
      >
        <DataCell
          className={`${styles.buttonCell} ${
            context?.variant === 'compact' ? styles.buttonCell_compact : ''
          }`}
        >
          <IconButton
            svgPath={isExpanded ? ChevronUpSVGpath : ChevronDownSVGpath}
            title={expandButtonTitle ?? t('tablerow.Expandable')}
            size={getIconButtonSize(isDesktop, context?.variant)}
            ariaExpanded={isExpanded}
            onClick={handleClick}
          />
          {isExpanded && (
            <div
              ref={expandableWrapperRef}
              className={styles.expandableContent}
            >
              {expandedContent}
            </div>
          )}
        </DataCell>
        {children}
      </tr>
    );
  }
);
RowWithLeftSideExpandButton.displayName = 'Row';

const RowWithRightSideExpandButton = forwardRef<
  HTMLTableRowElement,
  ExpandableRowProps
>(
  (
    {
      rowRef,
      onExpandClick,
      t,
      context,
      expandedContent,
      isDesktop,
      expandButtonTitle,
      isExpanded,
      children,
    },
    ref
  ) => {
    return (
      <>
        <tr
          ref={(node): void => {
            rowRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          className={isExpanded ? styles.row_noBorder : styles.row_notExpanded}
        >
          {children}
          <DataCell className={styles.buttonCell}>
            <IconButton
              svgPath={isExpanded ? ChevronUpSVGpath : ChevronDownSVGpath}
              title={expandButtonTitle ?? t('tablerow.Expandable')}
              size={getIconButtonSize(isDesktop, context?.variant)}
              ariaExpanded={isExpanded}
              onClick={onExpandClick}
            />
          </DataCell>
        </tr>
        {isExpanded && (
          <tr className={styles.expandedRowRight}>
            <td colSpan={999}>{expandedContent}</td>
          </tr>
        )}
      </>
    );
  }
);
RowWithRightSideExpandButton.displayName = 'Row';

export const Row = forwardRef<HTMLTableRowElement, RowProps>(
  (
    {
      expandButtonTitle,
      expandButtonPosition = getTableRowExpandButtonPositionDefault(),
      expandedContent,
      isExpandable,
      isExpanded: isExpandedExternal,
      onExpandCollapse,
      children,
    },
    ref
  ) => {
    const rowRef = useRef<HTMLTableRowElement | null>(null);
    const [isExpandedInternal, setIsExpandedInternal] = useState(false);
    const context = useContext(TableContext);
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const isExpanded =
      isExpandedExternal !== undefined
        ? isExpandedExternal
        : isExpandedInternal;

    useEffect(() => {
      setIsExpandedInternal(false);
    }, [context?.sortState]);

    const onExpandClick = (): void => {
      setIsExpandedInternal(!isExpandedInternal);

      onExpandCollapse && onExpandCollapse();
    };

    const expandableRowProps = {
      rowRef,
      ref,
      context,
      expandButtonTitle,
      expandedContent,
      t,
      isDesktop,
      isExpanded,
      onExpandClick,
      children,
    };

    if (!isExpandable) {
      return (
        <tr ref={ref} className={styles.row_notExpanded}>
          {children}
        </tr>
      );
    }
    if (expandButtonPosition === 'left') {
      return <RowWithLeftSideExpandButton {...expandableRowProps} />;
    }
    return <RowWithRightSideExpandButton {...expandableRowProps} />;
  }
);

Row.displayName = 'Row';
