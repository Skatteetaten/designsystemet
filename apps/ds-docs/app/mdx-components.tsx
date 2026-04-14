import { JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Link } from '@skatteetaten/ds-buttons';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

const components = {
  h1: ({ children }: { children?: ReactNode }): JSX.Element => (
    <Heading as={'h3'}>{children}</Heading>
  ),

  h2: ({ children }: { children?: ReactNode }): JSX.Element => (
    <Heading as={'h4'}>{children}</Heading>
  ),
  p: ({ children }: { children?: ReactNode }): JSX.Element => (
    <Paragraph>{children}</Paragraph>
  ),
  ul: ({ children }: { children?: ReactNode }): JSX.Element => (
    <List>{children}</List>
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
