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
      'data-testid': dataTestid,
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
      const currentRowRef = rowRef.current;

      const listener = (): void => {
        expandableWrapperRef.current?.style?.setProperty(
          'width',
          `${currentRowRef?.offsetWidth ?? 0}px`
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
        data-testid={dataTestid}
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
      'data-testid': dataTestid,
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
          data-testid={dataTestid}
        >
          {children}
          <TableDataCell
            className={`${styles.buttonCell} ${
              context?.variant === 'compact' ? styles.buttonCell_compact : ''
            }`}
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
            data-testid={dataTestid}
          >
            <td colSpan={999}>
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
