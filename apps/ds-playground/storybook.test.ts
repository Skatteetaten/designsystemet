import initStoryshots from '@storybook/addon-storyshots';
import { puppeteerTest } from '@storybook/addon-storyshots-puppeteer';
import {
  configureToMatchImageSnapshot,
  MatchImageSnapshotOptions,
} from 'jest-image-snapshot';
import puppeteer, { Browser } from 'puppeteer';

import fs from 'fs';
import dns from 'node:dns';
import { resolve } from 'path';

import CustomJestMatcher = jest.CustomJestMatcher;
import CustomMatcherResult = jest.CustomMatcherResult;

// Med node 18 så klarer ikke storyshots å koble til docker imaget uten denne
dns.setDefaultResultOrder('ipv4first');

const customConfig: MatchImageSnapshotOptions = {
  allowSizeMismatch: true,
  comparisonMethod: 'ssim',
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: true,
  failureThreshold: 0.00001,
  failureThresholdType: 'percent',
  customDiffConfig: {
    ssim: 'fast',
  },
};

const SKIP_SNAPSHOTS = process.env['SKIP_SNAPSHOTS'];

if (SKIP_SNAPSHOTS) {
  const mockJestMatcher: CustomJestMatcher<
    () => string,
    CustomMatcherResult
  > = () => ({
    message: (): string => 'skipped',
    pass: true,
  });
  expect.extend({
    toMatchImageSnapshot: mockJestMatcher,
    toMatchSnapshot: mockJestMatcher,
  });
} else {
  const toMatchImageSnapshot = configureToMatchImageSnapshot({
    ...customConfig,
  });

  expect.extend({ toMatchImageSnapshot });
}

let browser;
let storybookUrl = 'http://localhost:4400';

if (process.env['STORYSHOTS_MODE'] === 'static') {
  storybookUrl = `file://${resolve(__dirname, '/opt/ds-playground')}`;
}
if (process.env['STORYSHOTS_MODE'] === 'ci') {
  storybookUrl = `file://${resolve(
    __dirname,
    '../../dist/storybook/ds-playground'
  )}`;
}

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
      if (SKIP_SNAPSHOTS) {
        page.screenshot = (): Promise<string> => Promise.resolve('skipped');
      }

      const viewport = options.context.parameters['viewport'];
      if (viewport?.defaultViewport) {
        const widthPx =
          viewport.viewports[viewport.defaultViewport].styles.width;
        await page.setViewport({
          width: parseInt(widthPx),
          height: 600,
        });
      } else {
        await page.setViewport({ width: 800, height: 600 });
      }
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
