import { Position } from '@skatteetaten/ds-core-utils';

import { TableVariant } from './Table.types';
import { DataCellAs } from '../DataCell/DataCell.types';

export const getTableVariantDefault = (): TableVariant => 'standard';
export const getDataCellAsDefault = (): DataCellAs => 'td';
export const getTableRowExpandButtonPositionDefault = (): Position => 'left';
