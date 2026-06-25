import {
  parseCodeBlockAttributes,
  rehypeCodeDefaultOptions,
  remarkCodeTab,
  remarkNpm,
} from 'fumadocs-core/mdx-plugins';
import { pageSchema } from 'fumadocs-core/source/schema';
import {
  defineCollections,
  defineConfig,
  defineDocs,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

import { fileURLToPath } from 'node:url';

import { remarkWordInfo } from './lib/remark-word-info';

export const docs = defineDocs({
  dir: fileURLToPath(new URL('./content/docs', import.meta.url)),
  docs: {
    schema: pageSchema.extend({
      hideToc: z.boolean().optional(),
    }),
  },
});

export const wordInfo = defineCollections({
  type: 'doc',
  dir: fileURLToPath(new URL('./content/wordinfo', import.meta.url)),
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      addLanguageClass: true,
      parseMetaString(meta, node, tree) {
        const defaultMeta =
          rehypeCodeDefaultOptions.parseMetaString?.(meta, node, tree) ?? {};
        const { attributes } = parseCodeBlockAttributes(meta, ['filename']);

        return {
          ...defaultMeta,
          filename: attributes.filename,
        };
      },
    },
    remarkPlugins: [remarkCodeTab, remarkNpm, remarkWordInfo],
  },
});
