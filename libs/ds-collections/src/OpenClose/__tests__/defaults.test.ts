import {
  getOpenCloseIconPositionDefault,
  getOpenCloseVariantDefault,
} from '../defaults';

describe('OpenClose defaults', () => {
  it('Når getOpenCloseIconPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getOpenCloseIconPositionDefault();
    expect(renderDefault).toBe('left');
  });
  it('Når getOpenCloseVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getOpenCloseVariantDefault();
    expect(renderDefault).toBe('standard');
  });
});
