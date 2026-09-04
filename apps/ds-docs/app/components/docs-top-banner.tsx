import { JSX, useRef } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import {
  TopBannerExternal,
  type TopBannerExternalHandle,
} from '@skatteetaten/ds-layout';
import { Heading } from '@skatteetaten/ds-typography';

import { useRootLoaderData } from '../root';
import { Navigation } from './navigation';

const skatteKartetLinks = [
  {
    href: 'https://www.skatteetaten.no/skattekartet/strategi',
    text: 'Strategi og føringer',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/god-praksis',
    text: 'God praksis',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/innhold',
    text: 'Mønstre og maler',
  },
  {
    href: 'https://designsystemet.skatteetaten.no/',
    text: 'Designsystemet',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/identitet',
    text: 'Vår identitet',
  },
];

export const DocsTopBanner = (): JSX.Element => {
  const { pageTree } = useRootLoaderData();
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const showPageNavigationInMenu = !useMediaQuery('(min-width: 1024px)');
  const closeMenu = (): void => topBannerRef.current?.closeMenu();

  return (
    <TopBannerExternal
      ref={topBannerRef}
      firstColumn={
        <>
          <Heading as={'h2'} level={3} hasSpacing>
            {'Skattekartet'}
          </Heading>
          <LinkGroup>
            {skatteKartetLinks.map((link) => (
              <LinkGroup.Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.text}
              </LinkGroup.Link>
            ))}
          </LinkGroup>
        </>
      }
      secondColumn={
        showPageNavigationInMenu ? (
          <>
            <Heading as={'h2'} level={3} hasSpacing>
              {'Innhold i designsystemet'}
            </Heading>
            <Navigation pageTree={pageTree} onNavigate={closeMenu} />
          </>
        ) : undefined
      }
    />
  );
};
