import type { ReactNode } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

type DocLinkItem = {
  href: string;
  text: string;
};

export function RepeterendeFelterDocs(): ReactNode {
  const urls: DocLinkItem[] = [
    {
      href: 'https://www.skatteetaten.no/stilogtone/monster/interaksjon/ensideapplikasjon/',
      text: 'Styre fokus en ensideapplikasjon (SPA)',
    },
    {
      href: 'https://www.skatteetaten.no/stilogtone/monster/interaksjon/legg_til/',
      text: '«Legge til»',
    },
  ];

  return (
    <div>
      <Paragraph className={'fontSizeM'}>
        {'Les om bakgrunn og detaljer i relaterte mønstre:'}
      </Paragraph>
      <LinkGroup className={'fontSizeM'}>
        {urls.map((link) => (
          <LinkGroup.Link key={link.href} href={link.href} className={'docs'}>
            {link.text}
          </LinkGroup.Link>
        ))}
      </LinkGroup>
    </div>
  );
}
