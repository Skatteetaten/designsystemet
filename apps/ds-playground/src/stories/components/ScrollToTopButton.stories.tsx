import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  getScrollToMainDefault,
  getVisibilityThresholdDefault,
  ScrollToTopButton,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

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
        defaultValue: { summary: String(getVisibilityThresholdDefault()) },
      },
    },
    scrollToMain: {
      table: {
        category: category.props,
        defaultValue: { summary: getScrollToMainDefault().toString() },
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
} satisfies Story;
Examples.parameters = exampleParameters;
