import {
  getVisibilityThresholdDefault,
  ScrollToTopButton,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
      table: {
        category: category.props,
      },
    },
    children: { table: { category: category.props } },
  },
  parameters: {
    backgrounds: {
      default: 'grey',
    },
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof ScrollToTopButton>;

export const Preview: StoryObj<typeof ScrollToTopButton> = {
  render: (args) => (
    <div className={'height100vh'}>
      <main className={'scrollToTopContainer'} tabIndex={-1}>
        <ExternalLayout />
        <ScrollToTopButton {...args} />
      </main>
    </div>
  ),
  args: {},
};

export const Example: StoryFn<typeof ScrollToTopButton> = (_args) => (
  <div className={'height100vh'}>
    <ScrollToTopButton visibilityThreshold={0} />
  </div>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
