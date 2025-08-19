import { Density, dsI18n } from '@skatteetaten/ds-core-utils';

import { TableCellAs, TextAlignment } from './Table.types';
import { EditButtonPosition } from '../TableEditableRow/TableEditableRow.types';

export const getDataCellAsDefault = (): TableCellAs => 'td';
export const getHeaderCellAsDefault = (): TableCellAs => 'th';
export const getTableVariantDefault = (): Density => 'standard';
export const getTableRowExpandButtonPositionDefault = (): EditButtonPosition =>
  'left';
export const getTableCellAlignmentDefault = (): TextAlignment => 'left';
export const getTableSumAlignmentDefault = (): TextAlignment => 'right';
export const getTableRowIsExpandedDefault = (): boolean => false;
export const getTableSumTextDefault = (): string =>
  dsI18n.t('ds_tables:tablesum.Sum');
export const getTableRowExpandButtonTitleDefault = (): string =>
  dsI18n.t('ds_tables:tablerow.Expandable');
