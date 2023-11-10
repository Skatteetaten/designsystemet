import {
  getSpinnerColorDefault,
  getSpinnerTitlePositionDefault,
  getSpinnerSizeDefault,
} from '../defaults';

describe('Spinner defaults', () => {
  it('Når getSpinnerTitlePositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSpinnerTitlePositionDefault();
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
