import { Icon } from '@skatteetaten/ds-icons';
import '../classnames.stories.css';
import { storiesOf } from '@storybook/react';
import { Page } from 'puppeteer';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';
import { screenShotOptions } from './testUtils/puppeteer.testing.utils';

storiesOf('Tester/Icon Gallery', module)
  .addParameters({
    async puppeteerTest(page: Page): Promise<void> {
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
