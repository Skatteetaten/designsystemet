import {
  getDividerSpacingTopDefault,
  getDividerSpacingBottomDefault,
  getDividerVariantDefault,
} from '../defaults';

describe('Divider defaults', () => {
  it('Når getDividerSpacingTopDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDividerSpacingTopDefault();
    expect(renderDefault).toBe('s');
  });

  it('Når getDividerSpacingBottomDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDividerSpacingBottomDefault();
    expect(renderDefault).toBe('s');
  });

  it('Når getDividerVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDividerVariantDefault();
    expect(renderDefault).toBe('subtle');
  });
});
