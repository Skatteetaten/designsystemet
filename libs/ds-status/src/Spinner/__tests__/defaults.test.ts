import {
  getSpinnerColorDefault,
  getSpinnerTextPositionDefault,
  getSpinnerSizeDefault,
} from '../defaults';

describe('Spinner defaults', () => {
  it('Når getSpinnerTextPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSpinnerTextPositionDefault();
    expect(renderDefault).toBe('bottom');
  });

  it('Når getSpinnerSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSpinnerSizeDefault();
    expect(renderDefault).toBe('medium');
  });

  it('Når getSpinnerColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSpinnerColorDefault();
    expect(renderDefault).toBe('black');
  });
});
