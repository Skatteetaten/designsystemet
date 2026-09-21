import type { Config } from '@react-router/dev/config';

export default {
  // disable SSR
  basename: '/designsystemet/',
  buildDirectory: '../../dist/ds-docs/build',
  ssr: false,
} satisfies Config;
