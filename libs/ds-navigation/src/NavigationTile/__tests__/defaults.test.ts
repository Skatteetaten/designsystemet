import {
  getNavigationTileHeadingAsDefault,
  getNavigationTileHideArrowDefault,
  getNavigationTileSizeDefault,
} from '../defaults';

describe('NavigationTile defaults', () => {
  it('Når getNavigationTileHeadingAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getNavigationTileHeadingAsDefault();
    expect(renderDefault).toBe('h2');
  });
  it('Når getNavigationTileHideArrowDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getNavigationTileHideArrowDefault();
    expect(renderDefault).toBe(false);
  });
  it('Når getNavigationTileSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getNavigationTileSizeDefault();
    expect(renderDefault).toBe('large');
  });
});
