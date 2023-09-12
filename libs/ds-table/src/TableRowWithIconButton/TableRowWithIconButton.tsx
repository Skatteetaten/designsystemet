import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';

import { ExpandableRowProps } from './TableRowWithIconButton.types';
import { getIconButtonSize } from './utils';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableDataCell } from '../TableDataCell/TableDataCell';

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
      rowRef: rowRef,
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
      rowRef: rowRef,
    }));
    return (
      <>
        <tr
          ref={rowRef}
          id={id}
          className={`${isExpanded ? styles.row_noBorder : ''} ${className}`}
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
              onClick={onExpandClick}
            />
          </TableDataCell>
        </tr>
        {isExpanded && (
          <tr
            id={id}
            className={`${styles.expandedRowRight} ${className}`}
            lang={lang}
            data-testid={dataTestId}
          >
            <td colSpan={rowRef?.current?.cells.length ?? 999}>
              <div className={classNames?.expandedContent}>
                {expandableContent}
              </div>
            </td>
          </tr>
        )}
      </>
    );
  }
);
RowWithRightSideExpandButton.displayName = 'TableRow';
