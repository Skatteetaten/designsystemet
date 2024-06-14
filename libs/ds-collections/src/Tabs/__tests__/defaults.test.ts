import { getTabsVariantDefault } from '../defaults';

describe('Tabs defaults', () => {
  it('Når getTabsVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTabsVariantDefault()).toBe('standard');
  });
});
