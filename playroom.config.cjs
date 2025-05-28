const path = require('path');

const root =
  process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './dist')
    : path.resolve(__dirname);

module.exports = {
  baseUrl: './',
  components: path.resolve('./apps/ds-playground/src/playroom/components.tsx'),
  outputPath: path.resolve('./dist/storybook/ds-playground/playroom'),
  title: 'Designsystemet Playroom',
  widths: [320, 480, 640, 1024, 1366, 1920],
  defaultVisibleWidths: [320, 1920],
  port: 9000,
  openBrowser: false,
  paramType: 'search', // default is 'hash'
  iframeSandbox: 'allow-scripts allow-same-origin allow-modals',
  exampleCode: `
<Button>Hei</Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: [path.resolve(root, 'libs')],
          use: [
            {
              loader: 'swc-loader',
              options: {
                sync: true,
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                  },
                  transform: {
                    react: {
                      runtime: 'automatic',
                    },
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              use: [
                {
                  loader: '@svgr/webpack',
                  options: {
                    svgo: true,
                    namedExport: 'ReactComponent',
                    exportType: 'named',
                    ref: true,
                  },
                },
                {
                  loader: 'url-loader',
                },
              ],
            },
            {
              type: 'asset/resource',
            },
          ],
        },
        {
          test: /\.css$/i,
          include: [
            path.resolve(__dirname, './dist/libs/ds-core-designtokens'),
            path.resolve(
              __dirname,
              './apps/ds-playground/.storybook/playground.css'
            ),
          ],
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  exportLocalsConvention: 'camelCase',
                  auto: true,
                  namedExport: false,
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(root, 'libs')],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      alias: {
        '@skatteetaten/ds-buttons': path.resolve(root, 'libs/ds-buttons/src'),
        '@skatteetaten/ds-collections': path.resolve(
          root,
          'libs/ds-collections/src'
        ),
        '@skatteetaten/ds-content': path.resolve(root, 'libs/ds-content/src'),
        '@skatteetaten/ds-core-designtokens': path.resolve(
          root,
          'dist/libs/ds-core-designtokens'
        ),
        '@skatteetaten/ds-forms': path.resolve(root, 'libs/ds-forms/src'),
        '@skatteetaten/ds-icons': path.resolve(root, 'libs/ds-icons/src'),
        '@skatteetaten/ds-layout': path.resolve(root, 'libs/ds-layout/src'),
        '@skatteetaten/ds-navigation': path.resolve(
          root,
          'libs/ds-navigation/src'
        ),
        '@skatteetaten/ds-overlays': path.resolve(root, 'libs/ds-overlays/src'),
        '@skatteetaten/ds-progress': path.resolve(root, 'libs/ds-progress/src'),
        '@skatteetaten/ds-status': path.resolve(root, 'libs/ds-status/src'),
        '@skatteetaten/ds-table': path.resolve(root, 'libs/ds-table/src'),
        '@skatteetaten/ds-typography': path.resolve(
          root,
          'libs/ds-typography/src'
        ),
        '@skatteetaten/ds-core-utils': path.resolve(
          root,
          'libs/ds-core-utils/src'
        ),
        // Add this alias for SCSS imports
        'libs/ds-core-utils/src/styles': path.resolve(
          root,
          'libs/ds-core-utils/src/styles'
        ),

        'libs/ds-core-designtokens/lib/designtokens': path.resolve(
          root,
          'libs/ds-core-designtokens/lib/designtokens'
        ),
      },
    },
  }),
};
