import { getChipSizeDefault, getChipVariantDefault } from '../defaults';

describe('Chip defaults', () => {
  it('Når getChipVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipVariantDefault();
    expect(renderDefault).toBe('yellow');
  });

  it('Når getChipSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipSizeDefault();
    expect(renderDefault).toBe('medium');
  });
});
