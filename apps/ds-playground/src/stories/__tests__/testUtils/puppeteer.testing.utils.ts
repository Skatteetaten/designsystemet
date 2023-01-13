import { ScreenshotOptions } from 'puppeteer';

export const wrapper = '[data-test-block]';
export const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};
