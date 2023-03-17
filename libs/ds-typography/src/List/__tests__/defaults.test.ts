import { getListAsDefault } from '../defaults';

describe('List defaults', () => {
  it('Når getListAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getListAsDefault();
    expect(renderDefault).toBe('ul');
  });
});
