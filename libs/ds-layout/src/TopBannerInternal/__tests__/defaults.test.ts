import { getTopBannerInternalHideLogoOnMobileDefault } from '../defaults';

describe('TopBanner defaults', () => {
  it('Når getTopBannerInternalHideLogoOnMobile kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTopBannerInternalHideLogoOnMobileDefault();
    expect(renderDefault).toBe(false);
  });
});
