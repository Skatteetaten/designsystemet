import {
  getIconButtonIsOutlinedDefault,
  getIconButtonSizeDefault,
} from '../defaults';

describe('IconButton defaults', () => {
  it('Når getSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIconButtonSizeDefault();
    expect(renderDefault).toBe('medium');
  });
  it('Når getIsOutlinedDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIconButtonIsOutlinedDefault();
    expect(renderDefault).toBe(false);
  });
});
