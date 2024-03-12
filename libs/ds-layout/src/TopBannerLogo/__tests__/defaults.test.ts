import {
  getTopBannerLogoAsDefault,
  getTopBannerLogoHrefDefault,
} from '../defaults';

describe('TopBannerLogo default', () => {
  it('Når getTopBannerLogoAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerLogoAsDefault()).toBe('a');
  });
  it('når getTopBannerLogoHrefDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerLogoHrefDefault()).toBe('https://www.skatteetaten.no/');
  });
});
