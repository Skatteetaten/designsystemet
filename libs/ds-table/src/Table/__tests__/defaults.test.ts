import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getDataCellAsDefault,
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  getTableRowExpandButtonPositionDefault,
  getTableRowExpandButtonTitleDefault,
  getTableRowIsExpandedDefault,
  getTableSumAlignmentDefault,
  getTableSumTextDefault,
  getTableVariantDefault,
} from '../defaults';

describe('Table defaults', () => {
  it('Når getTableVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableVariantDefault()).toBe('standard');
  });
  it('Når getDataCellAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getDataCellAsDefault()).toBe('td');
  });
  it('Når getHeaderCellAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getHeaderCellAsDefault()).toBe('th');
  });
  it('Når getTableRowExpandButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableRowExpandButtonPositionDefault()).toBe('left');
  });
  it('Når getTableCellAlignmentDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableCellAlignmentDefault()).toBe('left');
  });
  it('Når getTableSumAlignmentDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableSumAlignmentDefault()).toBe('right');
  });
  it('Når getTableRowIsExpandedDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableRowIsExpandedDefault()).toBe(false);
  });
  it('Når getTableSumTextDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableSumTextDefault()).toBe(dsI18n.t('ds_tables:tablesum.Sum'));
  });
  it('Når getTableRowExpandButtonTitleDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableRowExpandButtonTitleDefault()).toBe(
      dsI18n.t('ds_tables:tablerow.Expandable')
    );
  });
});
