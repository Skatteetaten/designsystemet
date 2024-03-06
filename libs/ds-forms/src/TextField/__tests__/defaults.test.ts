import { getTextFieldAsDefault } from '../defaults';

describe('TextField defaults', () => {
  it('Når getTextFieldAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTextFieldAsDefault()).toBe('input');
  });
});
