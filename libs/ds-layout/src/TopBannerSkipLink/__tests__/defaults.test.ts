import { getTopBannerSkipLinkTargetDefault } from '../defaults';

describe('TopBannerSkipLink default', () => {
  it('når getTopBannerSkipLinkTargetDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerSkipLinkTargetDefault()).toBe('main');
  });
});
