import { Density, Position } from '@skatteetaten/ds-core-utils';

import { DataCellAs } from '../DataCell/DataCell.types';

export const getTableVariantDefault = (): Density => 'standard';
export const getDataCellAsDefault = (): DataCellAs => 'td';
export const getTableRowExpandButtonPositionDefault = (): Position => 'left';
