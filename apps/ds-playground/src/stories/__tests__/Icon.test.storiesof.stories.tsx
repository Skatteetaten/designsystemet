import {
  Icon,
  IconProps,
  AccountChildSVGpath,
  AndreForholdSVGpath,
  VariantCustomProps,
} from '@skatteetaten/ds-icons';
import { storiesOf } from '@storybook/react';
import { ElementHandle } from 'puppeteer';

import '../classnames.stories.css';

const iconsWithSize = [
  {
    variant: 'systemIcon',
    size: 'small',
    expectedClass: 'Icon_systemIcon_small',
  },
  {
    variant: 'systemIcon',
    size: 'medium',
    expectedClass: 'Icon_systemIcon_medium',
  },
  {
    variant: 'systemIcon',
    size: 'large',
    expectedClass: 'Icon_systemIcon_large',
  },
  {
    variant: 'systemIcon',
    size: 'extraLarge',
    expectedClass: 'Icon_systemIcon_extraLarge',
  },
  {
    variant: 'themeIcon',
    size: 'medium',
    expectedClass: 'Icon_themeIcon_medium',
  },
  {
    variant: 'themeIcon',
    size: 'large',
    expectedClass: 'Icon_themeIcon_large',
  },
];

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
iconsWithSize.forEach(function (icon) {
  const variantArgs = {
    variant: icon.variant,
    size: icon.size,
  } as VariantCustomProps;

  const iconArgs = {
    ...variantArgs,
    svgPath:
      icon.variant === 'systemIcon' ? AccountChildSVGpath : AndreForholdSVGpath,
  } as IconProps;

  storiesOf('Tests/Icon', module)
    .addParameters({
      async puppeteerTest(page: ElementHandle): Promise<void> {
        const classNames = await page.$eval('svg', (el) =>
          el.getAttribute('class')
        );
        expect(classNames).toContain(icon.expectedClass);

        const image = await page.screenshot({
          fullPage: true,
          encoding: 'base64',
        });
        expect(image).toMatchImageSnapshot();
      },
    })
    .add(
      `Icon With Size ${icon.size} (${icon.variant})`,
      () => <Icon {...iconArgs} />,
      {
        component: Icon,
      }
    );
});
