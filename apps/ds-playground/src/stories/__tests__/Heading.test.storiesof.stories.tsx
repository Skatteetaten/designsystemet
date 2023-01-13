import { AxePuppeteer } from '@axe-core/puppeteer';
import {
  Heading,
  headingAsArr,
  headingLevelArr,
  HeadingProps,
} from '@skatteetaten/ds-typography';
import { storiesOf } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import { Page } from 'puppeteer';

import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

import '../classnames.stories.css';

const verifyMatchSnapShot = async (page: Page): Promise<void> => {
  const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
  expect(innerHtml).toMatchSnapshot();
};

const verifyMatchImageSnapShot = async (page: Page): Promise<void> => {
  const image = await page.screenshot(screenShotOptions);
  expect(image).toMatchImageSnapshot();
};

const verifyAxeRules = async (page: Page): Promise<void> => {
  const axeResults = await new AxePuppeteer(page).include(wrapper).analyze();
  expect.extend(toHaveNoViolations);
  expect(axeResults).toHaveNoViolations();
};

const verifySnapshotsAndAxeRules = async (page: Page): Promise<void> => {
  await verifyMatchSnapShot(page);
  await verifyMatchImageSnapShot(page);
  await verifyAxeRules(page);
};

// Når Heading har en level, så har elementet level satt og ser riktig ut
headingLevelArr.forEach(function (level) {
  const headingArgs = {
    as: 'h2',
    level: level,
    children: `Heading level ${level}`,
  } as HeadingProps;

  storiesOf('Tests/Heading', module)
    .addParameters({
      async puppeteerTest(page: Page): Promise<void> {
        await verifyMatchImageSnapShot(page);
        await verifyAxeRules(page);

        const classNames = await page.$eval(`${wrapper} > h2`, (el) =>
          el.getAttribute('class')
        );
        expect(classNames).toContain(`level${level}`);
      },
    })
    .add(
      `Defaults Level ${level} (A2 delvis)`,
      () => (
        <div data-test-block>
          <Heading {...headingArgs} />
        </div>
      ),
      {
        component: Heading,
        argTypes: {
          // Baseprops
          key: { table: { disable: true } },
          ref: { table: { disable: true } },
          className: { table: { disable: true } },
          id: { table: { disable: true } },
          lang: { table: { disable: true } },
          'data-testid': { table: { disable: true } },
          // Props
          as: {
            table: { disable: true },
            options: [...headingAsArr],
            control: 'inline-radio',
          },
          children: {
            table: { disable: true },
            control: 'text',
          },
          hasSpacing: { table: { disable: true } },
          level: {
            table: { disable: false },
            options: [...headingLevelArr],
            control: 'inline-radio',
          },
        },
      }
    );
});

// Når Heading har As, får elementet riktig tag
// Tester også med alle levels for å sjekke at As blir overskrevet av Level
headingAsArr.forEach(function (as) {
  const headingArgs = {
    as: as,
  } as HeadingProps;

  storiesOf('Tests/Heading', module)
    .addParameters({
      async puppeteerTest(page: Page): Promise<void> {
        await verifySnapshotsAndAxeRules(page);

        const headingElement = await page.$(`${wrapper} > ${as}`);
        expect(headingElement).toBeTruthy();
      },
    })
    .add(
      `As ${as} (B1 delvis)`,
      () => (
        <div data-test-block>
          <Heading
            {...headingArgs}
            level={1}
          >{`Heading <${as}> level 1`}</Heading>
          <Heading
            {...headingArgs}
            level={2}
          >{`Heading <${as}> level 2`}</Heading>
          <Heading
            {...headingArgs}
            level={3}
          >{`Heading <${as}> level 3`}</Heading>
          <Heading
            {...headingArgs}
            level={4}
          >{`Heading <${as}> level 4`}</Heading>
          <Heading
            {...headingArgs}
            level={5}
          >{`Heading <${as}> level 5`}</Heading>
        </div>
      ),
      {
        component: Heading,
        argTypes: {
          // Baseprops
          key: { table: { disable: true } },
          ref: { table: { disable: true } },
          className: { table: { disable: true } },
          id: { table: { disable: true } },
          lang: { table: { disable: true } },
          'data-testid': { table: { disable: true } },
          // Props
          as: {
            table: { disable: false },
            options: [...headingAsArr],
            control: 'inline-radio',
          },
          children: {
            table: { disable: true },
            control: 'text',
          },
          hasSpacing: { table: { disable: true } },
          level: {
            table: { disable: true },
            options: [...headingLevelArr],
            control: 'inline-radio',
          },
        },
      }
    );
});
