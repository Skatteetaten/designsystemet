import { JSX } from 'react';
import { Outlet } from 'react-router';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

import { PageLayout } from '../components/page-layout';

export default function DocsLayout(): JSX.Element {
  return (
    <>
      <TopBannerExternal />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}
