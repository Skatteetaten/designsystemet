import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('docs/*', 'routes/docs.tsx'),
] satisfies RouteConfig;
