import { getModalPaddingDefault } from '../defaults';

describe('Modal defaults', () => {
  it('Når getModalPaddingDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getModalPaddingDefault();
    expect(renderDefault).toBe('l');
  });
});
