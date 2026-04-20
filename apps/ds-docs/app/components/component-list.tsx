import { JSX } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';
import { Paragraph } from '@skatteetaten/ds-typography';

import browserCollections from '../../.source/browser';

import styles from './component-list.module.scss';

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
  <>
    <Paragraph variant={'ingress'} hasSpacing>
      {'Komponentene kan brukes både til løsninger for publikum og interne.'}
    </Paragraph>
    <nav
      aria-label={'Liste over alle komponentene i designsystemet'}
      className={styles.nav}
    >
      {componentEntries.map((path) => {
        const slug = path.replace(/^components\//, '').replace(/\.mdx$/, '');
        return (
          <NavigationTile
            key={path}
            title={toLabel(path)}
            href={`/components/${slug}`}
            size={'medium'}
            className={styles.tile}
          />
        );
      })}
    </nav>
  </>
);
