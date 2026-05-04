import { JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Link } from '@skatteetaten/ds-buttons';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import { Canvas } from './components/canvas';
import { ComponentWithDocgen, TypeTable } from './components/type-table';

interface CanvasMdxProps {
  children?: ReactNode;
  examplesPath?: string;
}

interface TypeTableMdxProps {
  of: ComponentWithDocgen;
}

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
};

export function getMdxComponents(): MDXComponents {
  return {
    ...components,
  };
}
