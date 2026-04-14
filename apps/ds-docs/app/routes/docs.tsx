import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

import type { Route } from './+types/docs';
import browserCollections from '../../.source/browser';
import { DocsBreadcrumbs } from '../components/breadcrumbs';
import { getMdxComponents } from '../mdx-components';
import { useRootLoaderData } from '../root';

// interface DocsContentProps {
//   // TODO: Ta i bruk når vi kan lenke til andre markdown-filer i MDX-innholdet
//   // markdownUrl: string;
//   path: string;
// }

interface ClientLoaderProps {
  markdownUrl: string;
  path: string;
}

const docsContentLoader = browserCollections.docs.createClientLoader({
  component({ frontmatter, default: Mdx }) {
    return (
      <div>
        <title>{frontmatter.title}</title>
        <meta name={'description'} content={frontmatter.description} />
        <Heading as={'h1'}>{frontmatter.title}</Heading>
        {frontmatter.description}
        <div>
          <Mdx components={getMdxComponents()} />
        </div>
      </div>
    );
  },
});
const docPaths = new Set(
  Object.keys(browserCollections.docs.raw).map((path) =>
    path.startsWith('./') ? path.slice(2) : path
  )
);

const getDocPath = (slug?: string): string | null => {
  const normalizedSlug = slug?.replace(/^\/|\/$/g, '') ?? '';
  const candidates = normalizedSlug
    ? [`${normalizedSlug}.mdx`, `${normalizedSlug}/index.mdx`]
    : ['index.mdx'];
  return candidates.find((candidate) => docPaths.has(candidate)) ?? null;
};

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<ClientLoaderProps> {
  const path = getDocPath(params['*']);
  if (!path) {
    throw new Response('Not found', { status: 404 });
  }

  return {
    path,
    markdownUrl: '',
  };
}

export const DocsPage = ({ path }: ClientLoaderProps): JSX.Element => {
  const { pageTree } = useRootLoaderData();

  return (
    <>
      <DocsBreadcrumbs pageTree={pageTree} />
      {docsContentLoader.useContent(path)}
    </>
  );
};

export default function Page({
  loaderData,
}: Route.ComponentProps): JSX.Element {
  return <DocsPage {...loaderData} />;
}
