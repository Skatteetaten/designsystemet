import { Decorator } from '@storybook/react-vite';

import { TopBannerExternalAndFooter } from '../src/stories/utils/TopBannerExternalAndFooter';

export const withPageLayout: Decorator = (Story, context) => {
  const { parameters } = context;
  const showAsSignedIn =
    (parameters.pageLayout?.showAsSignedIn as boolean) ?? false;
  const showRoleBanner =
    (parameters.pageLayout?.showRoleBanner as boolean) ?? false;
  return (
    <TopBannerExternalAndFooter
      showAsSignedIn={showAsSignedIn}
      showRoleBanner={showRoleBanner}
    >
      <Story />
    </TopBannerExternalAndFooter>
  );
};
