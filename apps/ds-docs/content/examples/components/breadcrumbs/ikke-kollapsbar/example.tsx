import { JSX } from 'react';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

export default function BreadcrumbsNoCollapseStateExample(): JSX.Element {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List shouldCollapse={false}>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#arbeidsliste'}>
            {'Arbeidsliste'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#eplepress-as'}>
            {'Eplepress AS'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#arbeidsoppgave'}>
            {'Arbeidsoppgave'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#informasjon'}>
            {'Informasjon'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
