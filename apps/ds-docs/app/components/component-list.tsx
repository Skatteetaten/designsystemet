import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { List } from '@skatteetaten/ds-typography';

import browserCollections from '../../.source/browser';

const componentEntries = Object.keys(browserCollections.docs.raw)
  .map((path) => path.replace(/^\.\//, ''))
  .filter(
    (path) => path.startsWith('components/') && path !== 'components/index.mdx'
  )
  .sort((left, right) => left.localeCompare(right, 'nb'));

const toLabel = (path: string): string =>
  path
    .replace(/^components\//, '')
    .replace(/\.mdx$/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/\b\w/g, (character) => character.toUpperCase());

export const ComponentList = (): JSX.Element => (
  <List>
    {componentEntries.map((path) => {
      const slug = path.replace(/^components\//, '').replace(/\.mdx$/, '');

      return (
        <List.Element key={path}>
          <Link href={`/components/${slug}`}>{toLabel(path)}</Link>
        </List.Element>
      );
    })}
  </List>
);
