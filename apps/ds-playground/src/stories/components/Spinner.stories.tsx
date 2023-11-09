import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Spinner,
  getSpinnerColorDefault,
  getSpinnerSizeDefault,
  getSpinnerTextPositionDefault,
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
    children: {
      table: { category: category.props },
      defaultValue: { summary: 'Laster inn' },
    },
    size: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerSizeDefault() },
        type: { summary: sizeArr.slice(1, 4) },
      },
      control: 'inline-radio',
      options: [...spinnerSizeArr],
    },
    textPosition: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerTextPositionDefault() },
      },
      control: 'inline-radio',
    },
    color: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerColorDefault() },
      },
      control: 'inline-radio',
    },
    hideText: {
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
