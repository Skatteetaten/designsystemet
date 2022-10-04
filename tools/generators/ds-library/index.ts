import {
  formatFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  TargetConfiguration,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/react';
import { Schema } from './schema';
import { Linter } from '@nrwl/linter';
import { configurationGenerator, scssGenerator } from 'nx-stylelint';

export default async function (tree: Tree, schema: Schema) {
  const projectName = schema.name;
  await libraryGenerator(tree, {
    linter: Linter.EsLint,
    skipFormat: false,
    skipTsConfig: false,
    unitTestRunner: 'jest',
    name: projectName,
    style: 'scss',
    publishable: schema.publishable,
    importPath: schema.importPath,
    strict: true,
    compiler: 'babel',
  });

  //konfigurasjon for stylelint
  await configurationGenerator(tree, {
    project: projectName,
    skipFormat: false,
    formatter: 'string',
  });
  await scssGenerator(tree, { project: projectName, skipFormat: false });

  const projectConfig = readProjectConfiguration(tree, projectName);

  const tsc: TargetConfiguration = {
    executor: './tools/executors/tsCheck:tsCheck',
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
      command: 'npm publish {args.switches}',
      cwd: `dist/libs/${projectName}`,
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

  const projectConfigWithRollupOptions = {
    ...projectConfig,
    targets: {
      ...projectConfig?.targets,
      build: {
        ...projectConfig?.targets.build,
        options: {
          ...projectConfig?.targets.build.options,
          rollupConfig: [`libs/${projectName}/rollup.config.js`],
        },
      },
    },
  };

  updateProjectConfiguration(tree, projectName, projectConfigWithRollupOptions);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
