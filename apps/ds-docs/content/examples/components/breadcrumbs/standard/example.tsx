import { Breadcrumbs } from '@skatteetaten/ds-navigation';

export default function BreadcrumbsStandardStateExample(): JSX.Element {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#min-side'}>{'Min side'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#frister-og-oppgaver'}>
            {'Frister og oppgaver'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#frist'}>{'Frist'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
