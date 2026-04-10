import { JSX, ReactElement } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  type LinksFunction,
} from 'react-router';

import '@skatteetaten/ds-core-designtokens/index.css';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

export const meta: MetaFunction = () => [
  {
    title: 'Loom',
  },
];

export const links: LinksFunction = () => [];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang={'en'}>
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
        <TopBannerExternal />
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
