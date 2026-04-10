import type { Config } from '@react-router/dev/config';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';

import { glob } from 'node:fs/promises';
const getUrl = createGetUrl('/docs');
export default {
  // disable SSR
  ssr: false,
  // async prerender({ getStaticPaths }): Promise<string[]> {
  //   const paths: string[] = [...getStaticPaths()];
  //   for await (const entry of glob('**/*.mdx', { cwd: 'content/docs' })) {
  //     paths.push(getUrl(getSlugs(entry)));
  //   }
  //   return paths;
  // },
} satisfies Config;
