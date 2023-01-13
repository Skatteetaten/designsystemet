import { getVisibilityThresholdDefault } from '../defaults';

describe('ScrollToTopButton default', () => {
  it('når getVisibilityThresholdDefault kalles, så returnerer den riktig verdi', () => {
    expect(getVisibilityThresholdDefault()).toBe(1);
  });
});
