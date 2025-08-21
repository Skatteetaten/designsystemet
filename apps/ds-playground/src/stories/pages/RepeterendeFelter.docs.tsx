/* eslint-disable react/forbid-dom-props */
import type { ReactNode } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
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

      <ul>
        {urls.map((link) => (
          <li key={link.href} className={'fontSizeM'}>
            <Link href={link.href} className={'docs'}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
