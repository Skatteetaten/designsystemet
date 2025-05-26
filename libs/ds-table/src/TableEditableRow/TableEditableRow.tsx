import { useContext, useId, useImperativeHandle, useRef, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { EditSVGpath } from '@skatteetaten/ds-icons';

import { TableEditableRowProps } from './TableEditableRow.types';
import { getTableRowExpandButtonPositionDefault } from '../Table/defaults';
import { RowWithExpandButtonHandle } from '../Table/Table.types';
import { TableContext } from '../TableContext/TableContext';
import {
  RowWithLeftSideExpandButton,
  RowWithRightSideExpandButton,
} from '../TableRowWithIconButton/TableRowWithIconButton';

import styles from './TableEditableRow.module.scss';

export const TableEditableRow = ({
  ref,
  id: idExternal,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  editButtonRef,
  editableContentRef,
  editableContent,
  editButtonAriaDescribedby,
  editButtonPosition = getTableRowExpandButtonPositionDefault(),
  onEdit,
  children,
}: TableEditableRowProps): JSX.Element => {
  const rowWithButtonRef = useRef<RowWithExpandButtonHandle>(null);
  const srOnlySpanRef = useRef<HTMLSpanElement | null>(null);

  useImperativeHandle(
    editButtonRef,
    () => rowWithButtonRef?.current?.buttonRef?.current as HTMLButtonElement
  );

  useImperativeHandle(
    editableContentRef,
    () => srOnlySpanRef?.current as HTMLSpanElement
  );

  useImperativeHandle(
    ref,
    () => rowWithButtonRef?.current?.rowRef?.current as HTMLTableRowElement
  );
  const context = useContext(TableContext);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });
  const generatedId = useId();
  const id = idExternal ?? generatedId;
  const isExpanded = id === context?.rowInEditModeId;
  const concatenatedClassNames = `${
    isExpanded ? styles.editableRow_expanded : ''
  } ${className}`.trim();

  const closeEditableContent = (): void => {
    context?.setRowInEditModeId(undefined);
    setTimeout(() => {
      rowWithButtonRef.current?.focusButton();
    }, 0);
  };

  const Tag =
    editButtonPosition === 'left'
      ? RowWithLeftSideExpandButton
      : RowWithRightSideExpandButton;

  return (
    <Tag
      ref={rowWithButtonRef}
      id={id}
      lang={lang}
      className={concatenatedClassNames}
      data-testid={dataTestId}
      classNames={{ expandedContent: styles.expandableContent }}
      isExpandButtonDisabled={!!context?.rowInEditModeId}
      isExpanded={isExpanded}
      expandButtonTitle={t('tablerow.Editable')}
      expandButtonAriaDescribedby={editButtonAriaDescribedby}
      expandableContent={
        <>
          <div className={styles.editableRowTriangle} />
          <span ref={srOnlySpanRef} className={styles.srOnly} tabIndex={-1}>
            {t('tablerow.EditData')}
          </span>
          {/* eslint-disable-next-line react-compiler/react-compiler */}
          {editableContent?.(closeEditableContent)}
        </>
      }
      context={context}
      svgPath={EditSVGpath}
      hideIconButton={isExpanded}
      onExpandClick={(): void => {
        onEdit && onEdit();
        context?.setRowInEditModeId(id);
        setTimeout(() => srOnlySpanRef.current?.focus(), 0);
      }}
    >
      {children}
    </Tag>
  );
};

TableEditableRow.displayName = 'TableEditableRow';
