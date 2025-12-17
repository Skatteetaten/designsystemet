import { Decorator } from '@storybook/react-vite';

import { TopBannerExternalAndFooter } from '../src/stories/utils/TopBannerExternalAndFooter';

export const withPageLayout: Decorator = (Story) => {
  return (
    <TopBannerExternalAndFooter>
      <Story />
    </TopBannerExternalAndFooter>
  );
};
