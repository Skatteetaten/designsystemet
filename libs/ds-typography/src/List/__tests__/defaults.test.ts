import { getListAsDefault, getListHasIndentDefault } from '../defaults';

describe('List defaults', () => {
  it('Når getListAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getListAsDefault();
    expect(renderDefault).toBe('ul');
  });
  it('Når getListHasIndentDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getListHasIndentDefault();
    expect(renderDefault).toBe(true);
  });
});
