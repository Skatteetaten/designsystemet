import { getIconButtonSizeDefault } from '../defaults';

describe('IconButton defaults', () => {
  it('Når getSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIconButtonSizeDefault();
    expect(renderDefault).toBe('medium');
  });
});
