import { getChipSizeDefault, getChipColorDefault } from '../defaults';

describe('Chip defaults', () => {
  it('Når getChipColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipColorDefault();
    expect(renderDefault).toBe('ochre');
  });

  it('Når getChipSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipSizeDefault();
    expect(renderDefault).toBe('medium');
  });
});
