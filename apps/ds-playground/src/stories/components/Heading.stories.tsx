import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { Heading } from '@skatteetaten/ds-typography';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Heading,
  title: 'Komponenter/Heading',
  argTypes: {
    // Props
    as: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        type: { summary: headingAsArr },
      },
    },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    hasSpacing: {
      table: {
        category: category.props,
      },
    },
    level: {
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
  },
  parameters: { version: getVersion('ds-typography') },
} as Meta<typeof Heading>;

export const Preview: StoryObj<typeof Heading> = {
  args: {
    as: 'h2',
    level: 2,
    children: 'Overskrift',
  },
};

export const Example: StoryFn<typeof Heading> = (_args) => (
  <>
    <Heading as={'h1'} level={1} hasSpacing>
      {'Overskriftsnivå 1'}
    </Heading>
    <Heading as={'h2'} level={2} hasSpacing>
      {'Overskriftsnivå 2'}
    </Heading>
    <Heading as={'h3'} level={3} hasSpacing>
      {'Overskriftsnivå 3'}
    </Heading>
    <Heading as={'h4'} level={4} hasSpacing>
      {'Overskriftsnivå 4'}
    </Heading>
    <Heading as={'h5'} level={5} hasSpacing>
      {'Overskriftsnivå 5'}
    </Heading>
    <Heading as={'h6'} level={5} hasSpacing>
      {'Overskriftsnivå 6'}
    </Heading>
  </>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};