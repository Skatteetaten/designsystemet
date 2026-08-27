import { JSX, MouseEvent, MouseEventHandler, useCallback } from 'react';
import { useLinkClickHandler } from 'react-router';

import {
  Link,
  LinkGroup,
  LinkGroupProps,
  LinkProps,
} from '@skatteetaten/ds-buttons';
import {
  NavigationTile,
  NavigationTileProps,
} from '@skatteetaten/ds-navigation';

// Behandle kun interne ruter på klienten. Eksterne lenker og rene anker (#foo) skal følge nettleserens standardoppførsel.
const isInternalRoute = (href: string): boolean =>
  href.startsWith('/') && !href.startsWith('//');

interface UseRouterLinkClickOptions {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

// Bygger en onClick som lar react-router håndtere navigasjon på klient
// for interne ruter, og lar standardoppførsel ta over for eksterne lenker.
// Kan brukes sammen med ds-komponenter som tar `href` og `onClick`
// (f.eks. `Link`, `Breadcrumbs.Link`, `NavigationTile`).
export const useRouterLinkClick = (
  href: string,
  { onClick }: UseRouterLinkClickOptions = {}
): MouseEventHandler<HTMLAnchorElement> => {
  const handleClick = useLinkClickHandler<HTMLAnchorElement>(href);

  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>): void => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (!isInternalRoute(href)) return;
      handleClick(event);
    },
    [handleClick, href, onClick]
  );
};

type RouterDsLinkProps = Omit<LinkProps, 'onClick'>;

// ds-buttons `Link` koblet til react-router. Brukes blant annet for
// MDX `<a>` slik at innholds-lenker navigerer på klient.
export const RouterDsLink = ({
  href,
  children,
  ...rest
}: RouterDsLinkProps): JSX.Element => {
  const onClick = useRouterLinkClick(href ?? '');

  return (
    <Link {...rest} href={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export const RouterDsLinkGroup = Object.assign(
  (props: LinkGroupProps): JSX.Element => <LinkGroup {...props} />,
  { Link: RouterDsLink }
);

type RouterNavigationTileProps = Omit<NavigationTileProps, 'onClick'>;

// NavigationTile koblet til react-router slik at interne lenker navigerer
// på klient. Brukes typisk i MDX-innhold for navigasjonsruter.
export const RouterNavigationTile = ({
  href,
  ...rest
}: RouterNavigationTileProps): JSX.Element => {
  const onClick = useRouterLinkClick(href ?? '');

  return <NavigationTile {...rest} href={href} onClick={onClick} />;
};
