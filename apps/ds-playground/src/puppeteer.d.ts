import * as puppeteer from 'puppeteer';

declare module 'puppeteer' {
  export interface ElementHandle {
    waitForTimeout(duration: number): Promise<void>;
  }
}
