import { copyFileSync } from 'node:fs';

const clientDirectory = new URL(
  '../../../dist/ds-docs/build/client/',
  import.meta.url
);

// GitHub Pages has no SPA fallback, so serve the app shell for unknown paths
// and let React Router resolve direct links and page refreshes client-side.
copyFileSync(
  new URL('index.html', clientDirectory),
  new URL('404.html', clientDirectory)
);
