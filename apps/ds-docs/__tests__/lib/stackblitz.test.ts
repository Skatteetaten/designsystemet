import type { ExampleDescriptor } from '../../app/components/canvas.utils';
import { buildStackblitzProject } from '../../lib/stackblitz';

const DummyComponent = (): null => null;

const createExample = (
  overrides: Partial<ExampleDescriptor> = {}
): ExampleDescriptor => ({
  codeFiles: [
    {
      fileName: 'example.tsx',
      key: 'example.tsx',
      language: 'tsx',
      source: "import { TextField } from '@skatteetaten/ds-forms';\n",
      tabValue: 'example.tsx',
    },
  ],
  entryFileName: 'example.tsx',
  key: 'standard',
  label: 'Standard',
  urlPath: '/byggeblokker/komponenter/dummy',
  Component: DummyComponent,
  ...overrides,
});

describe('buildStackblitzProject', () => {
  test('genererer Vite-stillas og kopierer eksempelfiler til src/', () => {
    const project = buildStackblitzProject(createExample());

    expect(project.template).toBe('node');
    expect(Object.keys(project.files)).toEqual(
      expect.arrayContaining([
        'index.html',
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'src/main.tsx',
        'src/example.tsx',
      ])
    );
    expect(project.files['src/example.tsx']).toBe(
      "import { TextField } from '@skatteetaten/ds-forms';\n"
    );
  });

  test('main.tsx importerer entry-filen uten filendelse', () => {
    const project = buildStackblitzProject(
      createExample({ entryFileName: 'example.tsx' })
    );

    expect(project.files['src/main.tsx']).toContain(
      "import Example from './example';"
    );
  });

  test('låser @skatteetaten til latest og react til riktig versjon', () => {
    const project = buildStackblitzProject(createExample());
    const packageJson = JSON.parse(project.files['package.json'] ?? '{}');

    expect(packageJson.dependencies['@skatteetaten/ds-forms']).toBe('latest');
    expect(packageJson.dependencies['@skatteetaten/ds-core-designtokens']).toBe(
      'latest'
    );
    expect(packageJson.dependencies['react']).toBe('19.2.4');
    expect(packageJson.dependencies['react-dom']).toBe('19.2.4');
    expect(packageJson.stackblitz).toEqual({
      installDependencies: true,
      startCommand: 'npm run dev',
    });
  });

  test('tar med sass som devDependency kun når eksempelet har scss-filer', () => {
    const withoutScss = buildStackblitzProject(createExample());
    const withoutScssPackageJson = JSON.parse(
      withoutScss.files['package.json'] ?? '{}'
    );
    expect(withoutScssPackageJson.devDependencies.sass).toBeUndefined();

    const withScss = buildStackblitzProject(
      createExample({
        codeFiles: [
          {
            fileName: 'example.tsx',
            key: 'example.tsx',
            language: 'tsx',
            source: "import styles from './example.module.scss';\n",
            tabValue: 'example.tsx',
          },
          {
            fileName: 'example.module.scss',
            key: 'example.module.scss',
            language: 'scss',
            source: '.box { color: red; }\n',
            tabValue: 'example.module.scss',
          },
        ],
      })
    );
    const withScssPackageJson = JSON.parse(
      withScss.files['package.json'] ?? '{}'
    );
    expect(withScssPackageJson.devDependencies.sass).toBeDefined();
    expect(withScss.files['src/example.module.scss']).toBe(
      '.box { color: red; }\n'
    );
  });
});
