import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { AccountEnkSVGpath } from '@skatteetaten/ds-icons';
import {
  NavigationTile,
  NavigationTileProps,
  getNavigationTileHeadingAsDefault,
  getNavigationTileHideArrowDefault,
  getNavigationTileSizeDefault,
} from '@skatteetaten/ds-navigation';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const defaultTitle = 'Skatt';
const defaultDescription =
  'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.';

const meta = {
  component: NavigationTile,
  title: 'Komponenter/NavigationTile',
  argTypes: {
    // Props
    title: { control: 'text', table: { category: category.props } },
    classNames: {
      control: false,
      table: { category: category.props },
    },
    titleAs: {
      table: {
        category: category.props,
        defaultValue: { summary: getNavigationTileHeadingAsDefault() },
      },
    },
    description: { control: 'text', table: { category: category.props } },
    hasSpinner: { table: { category: category.props } },
    isExternal: { table: { category: category.props } },
    hideArrowIcon: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getNavigationTileHideArrowDefault().toString(),
        },
      },
    },
    size: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getNavigationTileSizeDefault() },
      },
    },
    spinnerTitle: { table: { category: category.props } },
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
    description: defaultDescription,
    href: '#',
  },
} satisfies Meta<NavigationTileProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (_args): JSX.Element => (
    <nav aria-label={'Beskrivelse av navigasjonsflater'}>
      <NavigationTile {..._args} />
    </nav>
  ),
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const defaultTitle = 'Skatt';
    const defaultDescription =
      'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.';

    return (
      <nav
        className={'flex gapXl'}
        aria-label={'Beskrivelse av navigasjonsflater'}
      >
        <NavigationTile
          title={defaultTitle}
          description={defaultDescription}
          href={'#'}
          size={'extraLarge'}
          svgPath={AccountEnkSVGpath}
        />
        <NavigationTile
          title={defaultTitle}
          description={defaultDescription}
          href={'#'}
          size={'extraLarge'}
          svgPath={AccountEnkSVGpath}
        />
      </nav>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
