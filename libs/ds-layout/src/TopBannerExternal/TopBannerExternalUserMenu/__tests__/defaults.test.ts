import { getTopBannerExternalUserMenuHostnameDefault } from '../defaults';

describe('TopBannerExternalUserMenu defaults', () => {
  it('Når getTopBannerExternalUserMenuHostnameDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerExternalUserMenuHostnameDefault()).toBe(
      'skatt.skatteetaten.no'
    );
  });
});
