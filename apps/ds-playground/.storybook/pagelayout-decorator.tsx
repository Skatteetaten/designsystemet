import { Decorator } from '@storybook/react/*';

import { TopBannerExternalAndFooter } from '../src/stories/utils/TopBannerExternalAndFooter';

export const withPageLayout: Decorator = (Story) => {
  return (
    <TopBannerExternalAndFooter>
      <Story />
    </TopBannerExternalAndFooter>
  );
};
