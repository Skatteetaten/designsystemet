import { remarkCodeTab, remarkNpm } from 'fumadocs-core/mdx-plugins';
import { pageSchema } from 'fumadocs-core/source/schema';
import {
  defineCollections,
  defineConfig,
  defineDocs,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

import { remarkWordInfo } from './lib/remark-word-info';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({
      hideToc: z.boolean().optional(),
    }),
  },
});

export const wordInfo = defineCollections({
  type: 'doc',
  dir: 'content/wordinfo',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkCodeTab, remarkNpm, remarkWordInfo],
  },
});
