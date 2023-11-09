import { getTopBannerLogoHrefDefault } from '../defaults';

describe('TopBannerLogo default', () => {
  it('når getTopBannerLogoHrefDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerLogoHrefDefault()).toBe('https://www.skatteetaten.no/');
  });
});
