import { JSX } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Link } from '@skatteetaten/ds-buttons';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

const components = {
  h1: ({ children }: { children?: React.ReactNode }): JSX.Element => (
    <Heading as={'h1'}>{children}</Heading>
  ),

  h2: ({ children }: { children?: React.ReactNode }): JSX.Element => (
    <Heading as={'h2'}>{children}</Heading>
  ),
  p: ({ children }: { children?: React.ReactNode }): JSX.Element => (
    <Paragraph>{children}</Paragraph>
  ),
  ul: ({ children }: { children?: React.ReactNode }): JSX.Element => (
    <List>{children}</List>
  ),
  li: ({ children }: { children?: React.ReactNode }): JSX.Element => (
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
