import { getCommonClassNameDefault } from '../defaults';

describe('Core utils defaults', () => {
  it('Når getCommonClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonClassNameDefault();
    expect(renderDefault).toBe('');
  });
});
