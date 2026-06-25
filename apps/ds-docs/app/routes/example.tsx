import { JSX } from 'react';
import { useLocation, type LinksFunction } from 'react-router';

import { Link } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

import type { Route } from './+types/example';
import exampleStylesUrl from './example.scss?url';
import { getExampleByPath } from '../components/canvas.utils';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: exampleStylesUrl },
];

export default function ExamplePage({
  params,
}: Route.ComponentProps): JSX.Element {
  const splat = params['*'] ?? '';
  const example = getExampleByPath(splat);
  const location = useLocation();
  const isEmbedded = location.hash === '#embedded';

  if (!example) {
    return (
      <div className={'exampleNotFound'}>
        <Paragraph>{`Fant ikke eksempelet «${splat}».`}</Paragraph>
        <Link href={'/'}>{'Tilbake til designsystemet'}</Link>
      </div>
    );
  }

  const { Component } = example;

  return (
    <main className={`examplePage${isEmbedded ? ' examplePageEmbedded' : ''}`}>
      <Component />
    </main>
  );
}
