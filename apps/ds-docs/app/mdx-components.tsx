import { JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Link } from '@skatteetaten/ds-buttons';
import { WordInfo } from '@skatteetaten/ds-overlays';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import browserCollections from '../.source/browser';
import { Canvas } from './components/canvas';
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
          components: getMdxComponents(),
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
    <Heading as={'h1'} id={id}>
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
    <Link href={href || ''}>{children}</Link>
  ),
  Canvas: ({ children, examplesPath }: CanvasMdxProps): JSX.Element => (
    <Canvas examplesPath={examplesPath}>{children}</Canvas>
  ),
  TypeTable: ({ of }: TypeTableMdxProps): JSX.Element => <TypeTable of={of} />,
  WordInfoTerm,
};

export function getMdxComponents(): MDXComponents {
  return {
    ...components,
  };
}
