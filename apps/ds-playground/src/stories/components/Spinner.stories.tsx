import {
  Spinner,
  spinnerColorArr,
  spinnerPositionArr,
  spinnerSizeArr,
} from '@skatteetaten/ds-status';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Spinner,
  title: 'Komponenter/Spinner',
  argTypes: {
    // Props
    children: { table: { category: category.props }, control: 'text' },
    size: {
      table: { category: category.props },
      control: 'inline-radio',
      options: [...spinnerSizeArr],
    },
    textPosition: {
      table: { category: category.props },
      control: 'inline-radio',
      options: [...spinnerPositionArr],
    },
    color: {
      table: { category: category.props },
      control: 'inline-radio',
      options: [...spinnerColorArr],
    },
    hideText: {
      control: 'boolean',
      table: { category: category.props },
    },
  },
  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<typeof Spinner>;

export const Preview: StoryObj<typeof Spinner> = {};

export const Example: StoryFn<typeof Spinner> = (_args) => (
  <>
    <Spinner
      className={'bottomSpacingXL'}
      size={'large'}
      color={'blue'}
      textPosition={'right'}
    >
      {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
    </Spinner>

    <Spinner size={'small'} color={'blue'} textPosition={'right'}>
      {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
    </Spinner>
  </>
);
Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
