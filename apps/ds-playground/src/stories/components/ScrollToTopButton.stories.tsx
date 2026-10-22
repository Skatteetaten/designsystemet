import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getDefaultScrollToTopButtonText,
  ScrollToTopButton,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: ScrollToTopButton,
  title: 'Komponenter/ScrollToTopButton',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    visibilityThreshold: { table: { category: category.props } },
    scrollToMain: { table: { category: category.props } },
    shadowRootNode: { control: false, table: { category: category.props } },
    children: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getDefaultScrollToTopButtonText(),
        },
      },
    },
  },
  globals: {
    backgrounds: {
      value: 'grey',
    },
  },
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <div className={'height100vh'}>
        <ExternalLayout />
        <Story />
      </div>
    ),
  ],
};
