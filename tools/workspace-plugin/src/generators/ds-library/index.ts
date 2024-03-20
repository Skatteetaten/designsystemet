import {
  formatFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  TargetConfiguration,
  Tree,
  updateJson,
  updateProjectConfiguration,
  generateFiles,
} from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { libraryGenerator } from '@nx/react';
import { configurationGenerator } from 'nx-stylelint';

import { Schema } from './schema';

export default async function (
  tree: Tree,
  schema: Schema
): Promise<() => void> {
  const projectName = schema.name;

  await libraryGenerator(tree, {
    name: projectName,
    style: 'scss',
    skipTsConfig: false,
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    publishable: schema.publishable,
    importPath: schema.importPath,
    strict: true,
    compiler: 'babel',
    bundler: 'rollup',
  });

  // konfigurasjon for stylelint
  await configurationGenerator(tree, {
    project: projectName,
    skipFormat: false,
    formatter: 'string',
  });

  const projectConfig = readProjectConfiguration(tree, projectName);

  const tsc: TargetConfiguration = {
    executor: '@skatteetaten/ds-dev-config:tsCheck',
    options: {
      tsConfig: ['tsconfig.lib.json', 'tsconfig.spec.json'],
    },
  };

  const version: TargetConfiguration = {
    executor: 'nx:run-commands',
    options: {
      command: 'npm version {args.packageVersion} --no-git-tag',
      cwd: projectConfig.root,
    },
  };

  const publish: TargetConfiguration = {
    executor: 'nx:run-commands',
    options: {
      command: `npm publish dist/libs/${projectName} {args.switches}`,
    },
  };

  projectConfig.targets = {
    ...projectConfig.targets,
    tsc,
    'set-version': version,
    publish,
  };

  updateProjectConfiguration(tree, projectName, projectConfig);

  const babelrcPath = joinPathFragments(projectConfig.root, '.babelrc');
  updateJson(tree, babelrcPath, (babelrc): object => {
    babelrc.presets = undefined;
    babelrc.plugins = undefined;
    babelrc.extends = '../../.babelrc';
    return babelrc;
  });

  const eslintrcPath = joinPathFragments(projectConfig.root, '.eslintrc.json');
  updateJson(tree, eslintrcPath, (eslintrc): object => {
    eslintrc.extends = ['../../.eslintrc.json'];
    return eslintrc;
  });

  const tsconfig = joinPathFragments(projectConfig.root, 'tsconfig.json');
  updateJson(tree, tsconfig, (tsconfig): object => {
    tsconfig.compilerOptions = {
      ...tsconfig.compilerOptions,
      allowJs: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      noImplicitOverride: true,
      noPropertyAccessFromIndexSignature: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true,
    };
    return tsconfig;
  });

  const tsconfigSpec = joinPathFragments(
    projectConfig.root,
    'tsconfig.spec.json'
  );
  updateJson(tree, tsconfigSpec, (tsconfigSpec): object => {
    tsconfigSpec.include = [
      'jest.config.ts',
      '**/__tests__/*.test.ts',
      '**/__tests__/*.test.tsx',
      '**/*.d.ts',
    ];
    return tsconfigSpec;
  });

  const tsconfigLib = joinPathFragments(
    projectConfig.root,
    'tsconfig.lib.json'
  );
  updateJson(tree, tsconfigLib, (tsconfigLib): object => {
    tsconfigLib.compilerOptions.types.push('../../types/i18next.d.ts');
    return tsconfigLib;
  });

  const packageJsonPath = joinPathFragments(projectConfig.root, 'package.json');
  updateJson(tree, packageJsonPath, (packageJson): object => {
    packageJson.groupId = 'no.skatteetaten.aurora';
    packageJson.repository = {
      type: 'git',
      url: 'git+https://github.com/Skatteetaten/designsystemet.git',
    };
    packageJson.publishConfig = {
      registry: 'https://nexus.sits.no/repository/npm-internal/',
    };
    packageJson.peerDependencies = {
      react: '^18',
    };
    packageJson.exports = undefined;
    packageJson.scripts = { ...packageJson.scripts };
    return packageJson;
  });

  const lint = projectConfig?.targets?.lint;
  const stylelint = projectConfig?.targets?.stylelint;
  const projectConfigWithRollupOptions = {
    ...projectConfig,
    implicitDependencies: ['!ds-dev-config'],
    targets: {
      ...projectConfig?.targets,
      build: {
        ...projectConfig?.targets.build,
        options: {
          ...projectConfig?.targets.build.options,
          rollupConfig: [`libs/${projectName}/rollup.config.js`],
          assets: [
            ...projectConfig.targets.build.options.assets,
            {
              glob: 'LICENSE',
              input: '.',
              output: '.',
            },
          ],
        },
      },
      lint: {
        ...lint,
        options: {
          ...lint.options,
          lintFilePatterns: [
            ...lint.options.lintFilePatterns,
            `libs/${projectName}/package.json`,
          ],
        },
      },
      stylelint: {
        ...stylelint,
        options: {
          ...stylelint.options,
          lintFilePatterns: [
            ...stylelint.options.lintFilePatterns,
            `libs/${projectName}/**/*.scss`,
          ],
        },
      },
    },
  };

  updateProjectConfiguration(tree, projectName, projectConfigWithRollupOptions);

  const templateDir = joinPathFragments(__dirname, './templates');
  generateFiles(tree, templateDir, projectConfig.root, { tmpl: '', ...schema });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
