import sdk from '@stackblitz/sdk';
import type { Project, ProjectFiles } from '@stackblitz/sdk';

import type { ExampleDescriptor } from '../app/components/canvas.utils';

// Verktøyversjoner låst til monorepoets rot.
const REACT_VERSION = '19.2.4';
const VITE_VERSION = '7.2.2';
const VITE_PLUGIN_REACT_VERSION = '5.1.1';
const SASS_VERSION = '1.89.2';
const TYPES_REACT_VERSION = '19.2.7';
const TYPES_REACT_DOM_VERSION = '19.2.3';

const SKATTEETATEN_SCOPE = '@skatteetaten/';
const DESIGNTOKENS_PACKAGE = '@skatteetaten/ds-core-designtokens';

const DS_VERSION = 'latest';

const getPackageNameFromSpecifier = (specifier: string): string => {
  const segments = specifier.split('/');

  if (specifier.startsWith('@')) {
    return segments.slice(0, 2).join('/');
  }

  return segments[0] ?? specifier;
};

const getPackageVersion = (packageName: string): string => {
  if (packageName.startsWith(SKATTEETATEN_SCOPE)) {
    return DS_VERSION;
  }

  if (packageName === 'react' || packageName === 'react-dom') {
    return REACT_VERSION;
  }

  return 'latest';
};

/** Henter alle ikke-relative importspesifikatorer fra en kildefil. */
const getBareSpecifiers = (source: string): string[] => {
  const specifiers: string[] = [];
  const importPattern = /(?:from|import)\s+['"]([^'"]+)['"]/g;

  for (const match of source.matchAll(importPattern)) {
    const specifier = match[1];

    if (specifier && !specifier.startsWith('.') && !specifier.startsWith('/')) {
      specifiers.push(specifier);
    }
  }

  return specifiers;
};

/**
 * Utleder npm-avhengigheter fra eksempelets kildefiler.
 *
 * - @skatteetaten/*-pakker låses til "latest".
 * - React og react-dom låses til rotens versjon.
 * - Ds-core-designtokens tas alltid med (importeres av main.tsx).
 */
const getDependencies = (
  codeFiles: ExampleDescriptor['codeFiles']
): Record<string, string> => {
  const dependencies: Record<string, string> = {
    react: REACT_VERSION,
    'react-dom': REACT_VERSION,
    [DESIGNTOKENS_PACKAGE]: DS_VERSION,
  };

  for (const codeFile of codeFiles) {
    for (const specifier of getBareSpecifiers(codeFile.source)) {
      const packageName = getPackageNameFromSpecifier(specifier);
      dependencies[packageName] = getPackageVersion(packageName);
    }
  }

  return dependencies;
};

const getDevDependencies = (
  codeFiles: ExampleDescriptor['codeFiles']
): Record<string, string> => {
  // typescript utelates med vilje: vite dev bruker esbuild og trenger den ikke,
  // og typescript@6 kolliderer med react-i18next sin valgfrie peer (typescript@^5),
  // som ville tvunget fram --legacy-peer-deps og dermed hoppet over peer-installasjon.
  const devDependencies: Record<string, string> = {
    '@types/react': TYPES_REACT_VERSION,
    '@types/react-dom': TYPES_REACT_DOM_VERSION,
    '@vitejs/plugin-react': VITE_PLUGIN_REACT_VERSION,
    vite: VITE_VERSION,
  };

  const hasScssFile = codeFiles.some((file) => file.language === 'scss');

  if (hasScssFile) {
    devDependencies.sass = SASS_VERSION;
  }

  return devDependencies;
};

const getEntryImportPath = (entryFileName: string): string => {
  return `./${entryFileName.replace(/\.[^./]+$/, '')}`;
};

const buildPackageJson = (example: ExampleDescriptor): string => {
  const packageJson = {
    name: 'skatteetaten-designsystem-eksempel',
    private: true,
    version: '0.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: getDependencies(example.codeFiles),
    devDependencies: getDevDependencies(example.codeFiles),
    stackblitz: {
      installDependencies: true,
      startCommand: 'npm run dev',
    },
  };

  return `${JSON.stringify(packageJson, null, 2)}\n`;
};

const buildMainTsx = (example: ExampleDescriptor): string => {
  return `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@skatteetaten/ds-core-designtokens/index.css';

import Example from '${getEntryImportPath(example.entryFileName)}';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Example />
    </StrictMode>
  );
}
`;
};

const buildIndexHtml = (title: string): string => {
  return `<!doctype html>
<html lang="nb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
};

const VITE_CONFIG = `import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
});
`;

const TSCONFIG = `${JSON.stringify(
  {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
    },
    include: ['src'],
  },
  null,
  2
)}\n`;

/**
 * Bygger et StackBlitz-prosjekt (Vite + React) fra et eksempel.
 *
 * Eksempelets egne filer kopieres uendret til src/, og det genereres et
 * minimalt Vite-stillas rundt dem. Ren funksjon uten sideeffekter.
 */
export const buildStackblitzProject = (example: ExampleDescriptor): Project => {
  const title = `Skatteetaten Designsystem – ${example.label}`;

  const files: ProjectFiles = {
    'index.html': buildIndexHtml(title),
    'package.json': buildPackageJson(example),
    'tsconfig.json': TSCONFIG,
    'vite.config.ts': VITE_CONFIG,
    'src/main.tsx': buildMainTsx(example),
  };

  for (const codeFile of example.codeFiles) {
    files[`src/${codeFile.fileName}`] = codeFile.source;
  }

  return {
    title,
    description: `Eksempel "${example.label}" fra Skatteetaten Designsystem.`,
    template: 'node',
    files,
  };
};

/** Åpner et eksempel i StackBlitz i ny fane. Kaster ved feil. */
export const openExampleInStackblitz = (example: ExampleDescriptor): void => {
  sdk.openProject(buildStackblitzProject(example), {
    openFile: `src/${example.entryFileName}`,
    newWindow: true,
  });
};
