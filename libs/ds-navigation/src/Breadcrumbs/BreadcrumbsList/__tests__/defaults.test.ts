import { getBreadcrumbsListShouldCollapseDefault } from '../defaults';

describe('BreadcrumbsList defaults', () => {
  it('Når getBreadcrumbsListShouldCollapseDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getBreadcrumbsListShouldCollapseDefault();
    expect(renderDefault).toBe(true);
  });
});
