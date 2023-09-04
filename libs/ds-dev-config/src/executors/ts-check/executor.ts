import type { ExecutorContext } from '@nx/devkit';

import { spawn } from 'child_process';
import { resolve, join } from 'path';

import { TsCheckExecutorSchema } from './schema';

const executable = resolve('node_modules', '.bin', 'tsc');

export default async function runExecutor(
  options: TsCheckExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const tsConfigs = Array.isArray(options.tsConfig)
    ? options.tsConfig
    : [options.tsConfig];
  const libRoot =
    context.projectsConfigurations?.projects[context.projectName ?? ''].root ??
    'unknown';

  const executionCodes = await Promise.all(
    tsConfigs.map(
      (tsConfig) =>
        new Promise((resolve) => {
          const child = spawn(
            executable,
            ['--noEmit', '-p', join(libRoot, tsConfig)],
            {
              shell: process.platform === 'win32',
              stdio: 'inherit',
            }
          );
          child.on('data', console.log);
          child.on('error', console.error);
          child.on('close', resolve);
        })
    )
  );

  const success = executionCodes.every((executionCode) => executionCode === 0);

  return { success };
}
