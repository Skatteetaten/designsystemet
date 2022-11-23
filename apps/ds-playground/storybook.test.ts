import initStoryshots from '@storybook/addon-storyshots';
import { puppeteerTest } from '@storybook/addon-storyshots-puppeteer';
import {
  configureToMatchImageSnapshot,
  MatchImageSnapshotOptions,
} from 'jest-image-snapshot';
import puppeteer, { Browser } from 'puppeteer';

import fs from 'fs';
import { resolve } from 'path';

const customConfig: MatchImageSnapshotOptions = {
  allowSizeMismatch: true,
  comparisonMethod: 'ssim',
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: true,
  failureThreshold: 0,
  failureThresholdType: 'percent',
  customDiffConfig: {
    ssim: 'fast',
  },
};

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  ...customConfig,
});

expect.extend({ toMatchImageSnapshot });

let browser;

const storybookUrl =
  process.env['STORYSHOTS_MODE'] === 'static'
    ? `file://${resolve(__dirname, '/opt/ds-playground')}`
    : process.env['STORYSHOTS_MODE'] === 'ci'
    ? `file://${resolve(__dirname, '../../dist/storybook/ds-playground')}`
    : 'http://localhost:4400';

initStoryshots({
  suite: 'Image storyshots',
  framework: 'react',
  test: puppeteerTest({
    getCustomBrowser:
      process.env['STORYSHOTS_MODE'] === 'static'
        ? async (): Promise<Browser> => {
            browser = await puppeteer.connect({
              browserURL: 'http://localhost:9002',
            });
            return browser;
          }
        : undefined,
    storybookUrl,
    async testBody(page, options) {
      const testResult = options.context.parameters['puppeteerTest']
        ? options.context.parameters['puppeteerTest'](page, options)
        : null;
      if (options.context.parameters['fileName'].includes('__tests__')) {
        const coverage = await page.evaluate('window.__coverage__');
        const outputFile = `./.nyc_output/${options.context.parameters['__id']}.json`;

        await fs.promises.mkdir('./.nyc_output', { recursive: true }).then(() =>
          fs.promises.writeFile(outputFile, JSON.stringify(coverage, null, 2), {
            flag: 'w',
            encoding: 'utf-8',
          })
        );
      }
      return testResult;
    },
  }),
  configPath: resolve(__dirname, './.storybook'),
});
