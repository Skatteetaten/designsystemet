import { getIsOutlinedDefault, getSizeDefault } from '../defaults';

describe('IconButton defaults', () => {
  it('Når getSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSizeDefault();
    expect(renderDefault).toBe('medium');
  });
  it('Når getIsOutlinedDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIsOutlinedDefault();
    expect(renderDefault).toBe(false);
  });
});
