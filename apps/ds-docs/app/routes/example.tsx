import { JSX } from 'react';
import { useLocation, type LinksFunction } from 'react-router';

import { Link } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

import exampleStylesUrl from './example.scss?url';
import { getExampleByPath } from '../components/canvas.utils';
import { getExamplePathFromSearch } from '../../lib/example-url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: exampleStylesUrl },
];

export default function ExamplePage(): JSX.Element {
  const location = useLocation();
  const examplePath = getExamplePathFromSearch(location.search);
  const example = examplePath ? getExampleByPath(examplePath) : null;
  const isEmbedded = location.hash === '#embedded';

  if (!example) {
    return (
      <div className={'exampleNotFound'}>
        <Paragraph>{`Fant ikke eksempelet «${examplePath ?? ''}».`}</Paragraph>
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
