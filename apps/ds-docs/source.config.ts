import { remarkCodeTab, remarkNpm } from 'fumadocs-core/mdx-plugins';
import {
  defineCollections,
  defineConfig,
  defineDocs,
} from 'fumadocs-mdx/config';

import { remarkWordInfo } from './lib/remark-word-info';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const wordInfo = defineCollections({
  type: 'doc',
  dir: 'content/wordinfo',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
    },
    remarkPlugins: [remarkCodeTab, remarkNpm, remarkWordInfo],
  },
});
