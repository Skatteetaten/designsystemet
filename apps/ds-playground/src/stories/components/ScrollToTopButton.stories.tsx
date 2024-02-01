import { JSX } from 'react';

import {
  getVisibilityThresholdDefault,
  ScrollToTopButton,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: ScrollToTopButton,
  title: 'Komponenter/ScrollToTopButton',
  argTypes: {
    // Props
    classNames: {
      control: false,
      table: { category: category.props },
    },
    visibilityThreshold: {
      table: {
        category: category.props,
        defaultValue: { summary: getVisibilityThresholdDefault() },
      },
    },
    shadowRootNode: {
      control: false,
      table: { category: category.props },
    },
    children: { table: { category: category.props } },
  },
  args: {},
  parameters: {
    backgrounds: {
      default: 'grey',
    },
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <div className={'height100vh'}>
        <main className={'scrollToTopContainer'} tabIndex={-1}>
          <ExternalLayout />
          <Story />
        </main>
      </div>
    ),
  ],
};

export const Examples: Story = {
  render: (_args) => (
    <div className={'height100vh'}>
      <ScrollToTopButton visibilityThreshold={0} />
    </div>
  ),
};
Examples.parameters = exampleParameters;
