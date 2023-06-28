import { Density, Position } from '@skatteetaten/ds-core-utils';

import { TableCellAs, TextAlignment } from './Table.types';

export const getDataCellAsDefault = (): TableCellAs => 'td';
export const getHeaderCellAsDefault = (): TableCellAs => 'th';
export const getTableVariantDefault = (): Density => 'standard';
export const getTableRowExpandButtonPositionDefault = (): Position => 'left';
export const getTableCellAlignmentDefault = (): TextAlignment => 'left';
