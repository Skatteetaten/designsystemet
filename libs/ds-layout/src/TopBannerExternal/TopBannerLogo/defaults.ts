import { dsI18n } from '@skatteetaten/ds-core-utils';

import { LogoAs } from './TopBannerLogo.types';

export const getTopBannerLogoAsDefault = (): LogoAs => 'a';
export const getTopBannerLogoHrefDefault = (): string =>
  dsI18n.t('Shared:shared.SkeLogoURL');
