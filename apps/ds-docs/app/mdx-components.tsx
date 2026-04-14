import { JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Link } from '@skatteetaten/ds-buttons';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

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
};

export function getMdxComponents(): MDXComponents {
  return {
    ...components,
  };
}
