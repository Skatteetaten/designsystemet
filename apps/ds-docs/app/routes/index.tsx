import { JSX } from 'react';

import type { Route } from './+types';
import { DocsPage } from './docs';

interface LoaderData {
  markdownUrl: string;
  path: string;
}

// eslint-disable-next-line no-empty-pattern
export async function clientLoader({}: Route.ClientLoaderArgs): Promise<LoaderData> {
  return {
    path: 'index.mdx',
    markdownUrl: '',
  };
}

export default function Page({
  loaderData,
}: Route.ComponentProps): JSX.Element {
  return <DocsPage {...loaderData} />;
}
