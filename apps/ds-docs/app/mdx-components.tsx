import { JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { WordInfo } from '@skatteetaten/ds-overlays';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import browserCollections from '../.source/browser';
import { Canvas } from './components/canvas';
import { MdxCode, MdxPre } from './components/code-block';
import { PublicImage } from './components/public-image';
import {
  RouterDsLink,
  RouterDsLinkGroup,
  RouterNavigationTile,
} from './components/router-link';
import { ComponentWithDocgen, TypeTable } from './components/type-table';

interface CanvasMdxProps {
  children?: ReactNode;
  examplesPath?: string;
}

interface TypeTableMdxProps {
  of: ComponentWithDocgen;
}

interface WordInfoTermMdxProps {
  children?: string;
  wordInfoKey: string;
}

interface MdxComponentOptions {
  forWordInfo?: boolean;
}

const getWordInfoPath = (wordInfoKey: string): string => {
  const candidates = [`${wordInfoKey}.mdx`, `${wordInfoKey}.md`];

  for (const candidate of candidates) {
    if (
      browserCollections.wordInfo.raw[candidate] ||
      browserCollections.wordInfo.raw[`./${candidate}`]
    ) {
      return candidate;
    }
  }

  throw new Error(
    `Fant ikke WordInfo-innhold for "${wordInfoKey}". Legg til ${wordInfoKey}.mdx eller ${wordInfoKey}.md i apps/ds-docs/content/wordinfo/.`
  );
};

const wordInfoContentLoader = browserCollections.wordInfo.createClientLoader<{
  components: MDXComponents;
}>({
  component({ default: Mdx }, { components }): JSX.Element {
    return <Mdx components={components} />;
  },
});

const WordInfoTerm = ({
  children = '',
  wordInfoKey,
}: WordInfoTermMdxProps): JSX.Element => {
  const wordInfoPath = getWordInfoPath(wordInfoKey);

  return (
    <WordInfo>
      <WordInfo.Trigger>{children}</WordInfo.Trigger>
      <WordInfo.Content>
        {wordInfoContentLoader.useContent(wordInfoPath, {
          components: getMdxComponents({ forWordInfo: true }),
        })}
      </WordInfo.Content>
    </WordInfo>
  );
};

const components = {
  h1: ({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }): JSX.Element => (
    // Vi har en skjult h1 på hver side, så vi starter på h2 her.
    <Heading as={'h2'} id={id}>
      {children}
    </Heading>
  ),

  h2: ({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }): JSX.Element => (
    <Heading as={'h3'} id={id} hasSpacing={false}>
      {children}
    </Heading>
  ),
  h3: ({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }): JSX.Element => (
    <Heading as={'h4'} id={id} hasSpacing={false}>
      {children}
    </Heading>
  ),
  h4: ({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }): JSX.Element => (
    <Heading as={'h5'} id={id} hasSpacing={false}>
      {children}
    </Heading>
  ),
  h5: ({
    children,
    id,
  }: {
    children?: ReactNode;
    id?: string;
  }): JSX.Element => (
    <Heading as={'h6'} id={id} hasSpacing={false}>
      {children}
    </Heading>
  ),

  p: ({ children }: { children?: ReactNode }): JSX.Element => (
    <Paragraph hasSpacing>{children}</Paragraph>
  ),
  ul: ({ children }: { children?: ReactNode }): JSX.Element => (
    <List hasSpacing>{children}</List>
  ),
  li: ({ children }: { children?: ReactNode }): JSX.Element => (
    <List.Element>{children}</List.Element>
  ),
  a: ({ children, href }: { children: string; href?: string }): JSX.Element => (
    <RouterDsLink href={href || ''}>{children}</RouterDsLink>
  ),
  img: PublicImage,
  PublicImage,
  code: MdxCode,
  pre: MdxPre,
  Canvas: ({ children, examplesPath }: CanvasMdxProps): JSX.Element => (
    <Canvas examplesPath={examplesPath}>{children}</Canvas>
  ),
  TypeTable: ({ of }: TypeTableMdxProps): JSX.Element => <TypeTable of={of} />,
  LinkGroup: RouterDsLinkGroup,
  NavigationTile: RouterNavigationTile,
  WordInfoTerm,
};

export function getMdxComponents(
  options: MdxComponentOptions = {}
): MDXComponents {
  return {
    ...components,
    ...(options.forWordInfo && {
      p: ({ children }: { children?: ReactNode }): JSX.Element => (
        <span>{children}</span>
      ),
    }),
  };
}
