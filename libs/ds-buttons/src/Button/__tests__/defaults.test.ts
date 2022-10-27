import { getButtonVariantDefault } from '../defaults';

describe('Button defaults', () => {
  it('Når getButtonVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getButtonVariantDefault();
    expect(renderDefault).toBe('primary');
  });
});
