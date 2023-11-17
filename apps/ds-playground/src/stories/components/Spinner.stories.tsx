import { dsI18n, sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Spinner,
  getSpinnerColorDefault,
  getSpinnerSizeDefault,
  getSpinnerTitlePositionDefault,
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
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_status:spinner.LoadingLabel') },
      },
    },
    size: {
      options: [...spinnerSizeArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerSizeDefault() },
        type: { summary: sizeArr.slice(1, 4) },
      },
    },
    titlePosition: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerTitlePositionDefault() },
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerColorDefault() },
      },
    },
    hideTitle: {
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
      titlePosition={'right'}
    >
      {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
    </Spinner>

    <Spinner size={'small'} color={'blue'} titlePosition={'right'}>
      {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
    </Spinner>
  </>
);
Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
