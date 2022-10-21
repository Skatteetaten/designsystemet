import { getPositionDefault } from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPositionDefault();
    expect(renderDefault).toBe('left');
  });
});
