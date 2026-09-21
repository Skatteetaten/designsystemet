import { JSX, ReactElement, ReactNode } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  type LinksFunction,
  type MetaFunction,
} from 'react-router';

import {
  useFumadocsLoader,
  type SerializedPageTree,
} from 'fumadocs-core/source/client';

import '@skatteetaten/ds-core-designtokens/index.css';
import { getPublicUrl } from '../lib/public-url';
import type { Route } from './+types/root';

export interface RootLoaderData {
  pageTree: SerializedPageTree;
}

export const meta: MetaFunction = () => [
  {
    title: 'Designsystemet',
  },
];

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: getPublicUrl('/favicon.ico'),
  },
  {
    rel: 'icon',
    href: getPublicUrl('/favicon-white.ico'),
    media: '(prefers-color-scheme: dark)',
  },
];

// eslint-disable-next-line no-empty-pattern
export async function loader({}: Route.LoaderArgs): Promise<RootLoaderData> {
  const { source } = await import('../lib/source');

  return {
    pageTree: await source.serializePageTree(source.getPageTree()),
  };
}

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang={'nb'}>
      <head>
        <meta charSet={'utf-8'} />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): ReactElement {
  return <Outlet />;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useRootLoaderData = () => {
  const loaderData = useRouteLoaderData<typeof loader>('root');

  if (!loaderData) {
    throw new Error('Mangler loader-data for root-ruten.');
  }

  return useFumadocsLoader(loaderData);
};
