import { forwardRef, useContext, useId } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { EditSVGpath } from '@skatteetaten/ds-icons';

import { DataCell } from '../DataCell/DataCell';
import { TableEditableRowProps } from '../Table/Table.types';
import { TableContext } from '../Table/TableContext';
import { getIconButtonSize, useMediaQuery } from '../Table/utils';

import styles from './EditableRow.module.scss';
export const EditableRow = forwardRef<
  HTMLTableRowElement,
  TableEditableRowProps
>(({ editableContent, onEdit, children }, ref) => {
  const context = useContext(TableContext);
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });
  const id = useId();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isExpanded = id === context?.rowInEditModeId;

  return (
    <>
      <tr
        ref={ref}
        className={
          isExpanded ? styles.editableRow_expanded : styles.editableRow
        }
      >
        {children}
        <DataCell className={styles.editableRowButtonCell}>
          {!isExpanded && (
            <IconButton
              svgPath={EditSVGpath}
              title={t('tablerow.Editable')}
              size={getIconButtonSize(isDesktop, context?.variant)}
              disabled={!!context?.rowInEditModeId}
              ariaExpanded={isExpanded}
              onClick={(): void => {
                onEdit && onEdit();
                context?.setRowInEditModeId(id);
              }}
            />
          )}
        </DataCell>
      </tr>
      {isExpanded && (
        <tr className={styles.expandedRow}>
          <td className={styles.editableRowCell} colSpan={999}>
            <div className={styles.editableRowTriangle} />
            {editableContent?.(() => context?.setRowInEditModeId(undefined))}
          </td>
        </tr>
      )}
    </>
  );
});

EditableRow.displayName = 'TableEditableRow';
