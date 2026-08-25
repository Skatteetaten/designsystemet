import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  route('example.html', 'routes/example.tsx'),
  layout('routes/docs-layout.tsx', [
    index('routes/index.tsx'),
    route('*', 'routes/docs.tsx'),
  ]),
] satisfies RouteConfig;
