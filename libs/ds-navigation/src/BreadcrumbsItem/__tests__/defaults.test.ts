import { getBreadcrumbsItemIsCurrentPageDefault } from '../defaults';

describe('BreadcrumbsItem defaults', () => {
  it('Når getBreadcrumbsItemIsCurrentPageDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getBreadcrumbsItemIsCurrentPageDefault();
    expect(renderDefault).toBe(false);
  });
});
