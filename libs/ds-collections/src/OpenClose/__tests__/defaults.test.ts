import {
  getIconPositionDefault,
  getOpenCloseVariantDefault,
} from '../defaults';

describe('OpenClose defaults', () => {
  it('Når getIconPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIconPositionDefault();
    expect(renderDefault).toBe('left');
  });
  it('Når getOpenCloseVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getOpenCloseVariantDefault();
    expect(renderDefault).toBe('standard');
  });
});
