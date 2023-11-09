import { getTopBannerSkipLinkHrefDefault } from '../defaults';

describe('TopBannerSkipLink default', () => {
  it('når getTopBannerSkipLinkHrefDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerSkipLinkHrefDefault()).toBe('main:first-of-type');
  });
});
