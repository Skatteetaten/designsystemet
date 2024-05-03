import {
  NavigationTile,
  NavigationTileProps,
} from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const defaultTitle = 'Skatt';
const defaultDescription =
  'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.';

const meta = {
  component: NavigationTile,
  title: 'Komponenter/NavigationTile',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    isExternal: { table: { category: category.props } },
    hideArrowIcon: { table: { category: category.props } },
    size: { table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: { table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    href: { table: { category: category.htmlAttribute } },
    target: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    ariaLabel: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    title: defaultTitle,
    children: defaultDescription,
    href: '#',
  },
  parameters: {
    version: getVersion('ds-navigation'),
  },
} satisfies Meta<NavigationTileProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <nav className={'exampleSpacing gapXl'}>
      <NavigationTile title={defaultTitle} href={'#'}>
        {defaultDescription}
      </NavigationTile>
      <NavigationTile title={defaultTitle} href={'#'}>
        {defaultDescription}
      </NavigationTile>
    </nav>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
