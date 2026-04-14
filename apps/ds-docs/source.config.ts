import { remarkCodeTab, remarkNpm } from 'fumadocs-core/mdx-plugins';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
    },
    remarkPlugins: [
      // Add any remark plugins you want to use here
      remarkCodeTab,
      remarkNpm,
    ],
  },
});
