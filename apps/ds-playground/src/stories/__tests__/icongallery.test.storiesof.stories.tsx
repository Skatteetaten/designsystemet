import { Icon } from '@skatteetaten/ds-icons';
import '../classnames.stories.css';
import { storiesOf } from '@storybook/react';
import { ElementHandle, ScreenshotOptions } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

const screenShotOptions: ScreenshotOptions = {
  fullPage: true,
  encoding: 'base64',
};

storiesOf('Tests/Icon Gallery', module)
  .addParameters({
    async puppeteerTest(page: ElementHandle): Promise<void> {
      const image = await page.screenshot(screenShotOptions);
      expect(image).toMatchImageSnapshot();
    },
  })
  .add(
    'Theme Icons Image Snapshot',
    () => (
      <>
        {Object.entries(ThemeSVGPaths).map(([svgPathName, svgPath]) => (
          <Icon key={svgPathName} svgPath={svgPath} variant={'themeIcon'} />
        ))}
      </>
    ),
    {
      component: Icon,
    }
  )
  .add(
    'System Icons Image Snapshot',
    () => (
      <>
        {Object.entries(SystemSVGPaths).map(([svgPathName, svgPath]) => (
          <Icon key={svgPathName} svgPath={svgPath} />
        ))}
      </>
    ),
    {
      component: Icon,
    }
  );
